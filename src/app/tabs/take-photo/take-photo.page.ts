import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-take-photo',
  templateUrl: './take-photo.page.html',
  styleUrls: ['./take-photo.page.scss'],
})
export class TakePhotoPage implements OnInit {

  constructor(public imageService: ImagesService) { }

  ngOnInit() {
  }
  takeImage(){
    this.imageService.takeImage();
  }

}
