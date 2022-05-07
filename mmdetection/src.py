from mmdet.apis import inference_detector, init_detector, show_result_pyplot
import base64
import time
import operator
from datetime import datetime
import os
from flask import Flask, flash, request, redirect, url_for, render_template, Response, send_file, jsonify
from werkzeug.utils import secure_filename
import warnings
warnings.filterwarnings("ignore")
from PIL import Image, ImageDraw, ImageFont
import cv2
import numpy as np
import json
from flask_cors import CORS, cross_origin

# Choose to use a config and initialize the detector
model_config = './pth/cascade_double_heads_focal_loss.py'
# Setup a checkpoint file to load
model_checkpoint = './pth/best_bbox_mAP_epoch_10.pth'

input_path = './static/input/'
output_path = './static/output/'
def detect_func(model, img):
    dict_detection = {}
    score_thr = 0.5
    result = inference_detector(model, img)
    img = img.split('/')[-1] 
    dict_detection[img] = []
    if isinstance(result, tuple):
        bbox_result, segm_result = result
        if isinstance(segm_result, tuple):
            segm_result = segm_result[0]
    else:
        bbox_result, segm_result = result, None
    
    bboxes = np.vstack(bbox_result)
    labels = [
        np.full(bbox.shape[0], i, dtype=np.int32)
        for i, bbox in enumerate(bbox_result)
    ]
    labels = np.concatenate(labels)
    
    scores = bboxes[:, -1]
    inds = scores > score_thr
    bboxes = bboxes[inds, :]
    labels = labels[inds]
    
    for cls, bbox in zip(labels, bboxes):
        dict_detection[img].append([str(cls), str((bbox[0])), str((bbox[1])), str((bbox[2])), str((bbox[3])), str((bbox[4]))])
        
    return dict_detection

def infer_reg_func(det_results, img, detector=None, host='Minh'):
  font = ImageFont.truetype("DejaVuSans.ttf", 20)
  color = [(120, 181, 112), (49, 121, 92), (190, 55, 121),(133, 204, 209)]
  image = cv2.imread(img)
  curr_img = Image.open(img)
  draw = ImageDraw.Draw(curr_img)
  
  dict_infer = {}

  idname = time.time()
    
  if host == 'Minh':
    out_file = output_path + str(idname) + "-" + img.split('/')[-1]
    out_json_file = output_path + str(idname) + "-" + img.split('/')[-1].split('.')[0] + ".json"
    
  dict_infer[str(idname) + "-" + img.split('/')[-1]] = []
  for bbox in det_results[img.split('/')[-1]]:
      cls = int(bbox[0])
      score = float(bbox[-1])
      if score >= 0.5:
          x1,y1,x2,y2 =  int(float(bbox[1])), int(float(bbox[2])), int(float(bbox[3])), int(float(bbox[4]))
          draw.rectangle((x1,y1,x2,y2),outline=color[int(cls)],width = 5)
          if host == 'Minh':
            if cls == 0:
              cls_name = 'pedestrian'
            elif cls == 1:
              cls_name = 'motor'
            elif cls == 2:
              cls_name = 'car'
            else:
              cls_name = 'bus'            
            dict_infer[str(idname) + "-" + img.split('/')[-1]].append([cls_name,x1,y1,x2,y2,round(score,3)])
            
            draw.rectangle((x1,y1,x2,y2),outline=color[int(cls)],width = 3)
            text = cls_name + "|" + str(round(score,3))
            w, h = draw.textsize(text, font=font)
            if x2 < h:
                draw.rectangle(
                    (x1 + x2, y1 - 20, x1 + x2 + w, y1 + h),
                    fill=(64, 64, 64, 255)
                )
                draw.text(
                    (x1 + x2, y1 - 20),
                    text=text,
                    fill=(255, 255, 255, 255),
                    font=font
                )
            else:
                draw.rectangle(
                    (x1, y1 - 20, x1 + w, y1 - 20 + h),
                    fill=(64, 64, 64, 255)
                )
                draw.text(
                    (x1, y1 - 20),
                    text=text,
                    fill=(255, 255, 255, 255),
                    font=font
                )
  curr_img.save(out_file)

  with open(out_json_file, "w", encoding='utf-8') as jsonfile:
    json.dump(dict_infer, jsonfile, ensure_ascii=False)
  return out_file, out_json_file

UPLOAD_FOLDER = input_path

app = Flask(__name__, template_folder="./static/templates/")
cors = CORS(app, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
app.secret_key = "secret key"
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/minh/upload', methods=['POST'])
def mobile_minh():
    start_time = time.time()
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file = request.files['file']
    if file.filename == '':
        flash('No image selected for uploading')
        return redirect(request.url)
    else:
        filename = secure_filename(file.filename)
        file.save(os.path.join(input_path, filename))
        flash('Image successfully uploaded')
        model = init_detector(model_config, model_checkpoint, device='cuda:0')
        result = detect_func(model, input_path + str(filename))
        
        out_file, out_json_file = infer_reg_func(result, input_path + str(filename), host = 'Minh')
        
        with open(out_file, "rb") as image_file:
          encoded_string = base64.b64encode(image_file.read())
        json_file = open(out_json_file)
        json_text = json.load(json_file)
        json_file.close()
        json_text_str = str(json_text).replace('\'', '"')
        test_time = time.time() - start_time                

        return jsonify(image=encoded_string.decode("utf-8"), time=test_time, name=out_file.split('/')[-1], textLocation = json_text_str, title=filename.split(".")[0], created = str(datetime.fromtimestamp(start_time)))
   
@app.route('/minh/history', methods=['GET'])
def get_history_minh():
    start_time = time.time()
    predicted_images = os.listdir(output_path)
    images = []
    for img in predicted_images:
      if ("removed" not in img and "txt" not in img and "json" not in img):
        with open(output_path + img, "rb") as image_file:
          encoded_string = base64.b64encode(image_file.read())
          json_file = open(output_path + img[:-4] + ".json")
          json_text = json.load(json_file)
          json_file.close()
          json_text_str = str(json_text).replace('\'', '"')

          img_dict = {"name": img, "created": str(datetime.fromtimestamp(os.path.getctime(output_path + img))), "image": encoded_string.decode("utf-8"), "textLocation": json_text_str}
          images.append(img_dict)
    test_time = time.time() - start_time
    num_history = 10
    return jsonify(images=sorted(images, key=operator.itemgetter('created'), reverse=True)[0 : num_history], total=num_history, time=test_time)
    
@app.route('/minh/remove', methods=['POST'])
def delete_minh():
    start_time = time.time()
    if 'file' not in request.files:
        flash('No file part')
        return redirect(request.url)
    file_name = request.data['image_name']
    os.rename(os.path.join(output_path, file_name), os.path.join(output_path, file_name + "_removed"))
    return jsonify(noti="Success") 

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=3000)