import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {File} from '@awesome-cordova-plugins/file/ngx';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  ios: any = window;
  image: string;

    options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  };

  constructor(private camera: Camera, private file: File) { }

  public takeImage(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.savePicture(imageData);
     }, (err) => {
      // Handle error
     });
  }

  async savePicture(iosImagePath: string){
    const iosFile = iosImagePath.substr(iosImagePath.lastIndexOf('/') + 1);
    const iosFileSystemPath = iosImagePath.substr(0, iosImagePath.lastIndexOf('/') + 1);
    const newBaseFileSystemPath = this.file.dataDirectory;
    await this.file.copyFile(iosFileSystemPath, iosFile, newBaseFileSystemPath,iosFile);
    const stockImage = iosFileSystemPath+ iosFile;
    const showImage = this.ios.Ionic.WebView.convertFileSrc(stockImage);
    this.image = showImage;

  }



}
