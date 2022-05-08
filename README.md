## AERIAL OBJECT DETECTION APP

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/MinhTran0311/AerialObjectDetection">
    <img src="https://github.com/MinhTran0311/AerialObjectDetection/blob/main/Mobile/assets/icons/ic_appicon.png" alt="Logo" width="200" height="200">
  </a>
  <h3 align="center">AERIAL OBJECT DETECTION APP</h3>
  <p align="center">
  Aerial Object Detetion is a cross-platform application that detects traffic objects (Pedestrian, Car, Motor, Bus). User can either choose to use mobile or web to provides a foggy aerial image and an output images will be produced.
    <br />
    <a href="https://play.google.com/store/apps/details?id=com.homies.realestate">View Demo</a>
    ·
    <a href="https://github.com/MinhTran0311/AerialObjectDetection/issues">Report Bug</a>
    ·
    <a href="https://github.com/MinhTran0311/AerialObjectDetection/issues">Request Feature</a>
  </p>
</p>
<!-- ABOUT THE PROJECT -->
## Introduction

This project provides an implementation for our thesis **"Object detection in foggy aerial images based on deep learning"**.
The repo is based on [MMDetection](https://github.com/open-mmlab/mmdetection) and  [Flutter Boilerplate](https://github.com/zubairehman/flutter-boilerplate-project).

## Installation
To get a local copy up and running follow these simple steps.
### Prerequisites
 1. Clone the repo
	   ```sh
	   git clone https://github.com/MinhTran0311/HomiesRealEstate_name.git
	   ```
### Server
Our mobile app is based on **Mmdetection**
1. Please refer to [INSTALL.md](https://mmdetection.readthedocs.io/en/v1.2.0/INSTALL.html) for installation.
 2. Install Flask
	   ```cmd
	   pip install Flask
	   ```
2. Run the server
	 ```cmd
	   cd mmdetection
	   CUDA_VISIBLE_DEVICES={{YOUR_GPU_DEIVCE_ID}} PORT={{PORT}} src.py
	  ```
### Mobile Flutter
Our mobile app is based on [Flutter Boilerplate](https://github.com/zubairehman/flutter-boilerplate-project).
Please refer to [README.md](https://github.com/zubairehman/flutter-boilerplate-project/blob/master/README.md) if you need any further information.
1. Install required library
	 ```cmd
	   cd Mobile
	   flutter pub get
2. Auto Inject file
   ```cmd
   flutter packages pub run build_runner build --delete-conflicting-outputs
   ```
3. Run the App
	```cmd
   flutter run
   ```
### Web ReactJs
1. Install required library
	 ```cmd
	   cd Web
	   npm install
	  ```
2. Create an .env file that contains
   ```cmd
   REACT_APP_SERVER_URL=http://{{YOUR_IP_ADRESS}}:{{PORT}}/minh
   ```
4. Run the App
  	```cmd
   npm start
   ```
 <!-- CONTACT -->
## Contact
- Trần Tuấn Minh | Email: 18520314@gm.uit.edu.vn
- [UIT-Together Research Group](https://uit-together.github.io/)
- Project Link: [https://github.com/MinhTran0311/AerialObjectDetection](https://github.com/MinhTran0311/AerialObjectDetection/)
<!-- Tech Stacks -->
## Techstack
- Flutter
- Dio
- MobX (to connect the reactive data of your application with the UI)
- Provider (State Management)
- Dependency Injection
- ReactJs
- Python
- Flask 
