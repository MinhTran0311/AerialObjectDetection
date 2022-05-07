import os
from mmdet.apis import init_detector, inference_detector, show_result_pyplot
import warnings
warnings.filterwarnings("ignore")
from vietocr.tool.predictor import Predictor
from vietocr.tool.config import Cfg
from PIL import Image, ImageDraw, ImageFont
import cv2 
import numpy as np
import json

def detect(model, img):
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

def infer_reg(det_results, img):

  font = ImageFont.truetype("DejaVuSans.ttf", 20)
  color = [(0,0,255), (0,128,0), (255,0,0)]
  image = cv2.imread(input_image)
  curr_img = Image.open(input_image)
  draw = ImageDraw.Draw(curr_img)
  
  dict_infer = {}
  dict_infer[img.split('/')[-1]] = []
  
  for bbox in det_results[img.split('/')[-1]]:
      cls = int(bbox[0])
      score = float(bbox[-1])
      if score >= 0.5:
          x1,y1,x2,y2 =  int(float(bbox[1])), int(float(bbox[2])), int(float(bbox[3])), int(float(bbox[4]))
          
          if cls == 0:
              draw.rectangle((x1,y1,x2,y2),outline=color[int(cls)],width = 5)
              crop_img = image[y1:y2,x1:x2]
  
              w, h = crop_img.shape[1], crop_img.shape[0]
  
              cv2.imwrite("temp.png", crop_img)
              image_ = Image.open("temp.png")
  
  
              caption = detector.predict(image_)
              dict_infer[img.split('/')[-1]].append(['caption', x1,y1,x2,y2,round(score,3),caption])
              w, h = draw.textsize(caption, font=font)
              if x2 < h:
                  draw.rectangle(
                      (x1 + x2, y1 - 20, x1 + x2 + w, y1 + h),
                      fill=(64, 64, 64, 255)
                  )
                  draw.text(
                      (x1 + x2, y1 - 20),
                      text=caption,
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
                      text=caption,
                      fill=(255, 255, 255, 255),
                      font=font
                  )
          else:
              draw.rectangle((x1,y1,x2,y2),outline=color[int(cls)],width = 5)
              cls_name = 'table' if cls == 1 else 'figure'
              dict_infer[img.split('/')[-1]].append([cls_name,x1,y1,x2,y2,round(score,3)])
  
  #cv2.imwrite(os.path.join('demo_output', img.split('/')[-1]), np.asarray(curr_img))
  curr_img.save(os.path.join('demo_output', img.split('/')[-1]))

  save_json = img.split('/')[-1]
  save_json = save_json.split('.')[0] + '.json'
  
  with open(os.path.join('demo_output', save_json), "w", encoding='utf-8') as jsonfile:
      json.dump(dict_infer, jsonfile, ensure_ascii=False)
 
 
#def write_json(det_results, img_name):
#
#    img_name = img_name.split('/')[-1]
#    img_name = img_name.split('.')[0] + '.json' 
#    with open(os.path.join('demo_output', img_name),"w", encoding='utf-8') as jsonfile:
#        json.dump(data,jsonfile,ensure_ascii=False)

#Input image  
input_image = "demo_input/000108.jpg"

#Page Object Detection
config_detection = "./model/cdersnet_ga/cdersnet_ga.py"
check_point_detection = "./model/cdersnet_ga/best_bbox_mAP.pth"
det_model = init_detector(config_detection, check_point_detection, device='cuda:0')
det_results = detect(det_model, input_image)

#Caption recognition
config = Cfg.load_config_from_name('vgg_transformer')
config['weights'] = 'weights/transformerocr.pth'
config['cnn']['pretrained']=False
config['device'] = 'cuda:0'
config['predictor']['beamsearch']=False
detector = Predictor(config)

#Output
infer_reg(det_results, input_image)