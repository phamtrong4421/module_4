import { Component, OnInit } from '@angular/core';
import {GalleryConfig} from "./token";
import {Inject} from "@angular/core";
import {Optional} from "@angular/core";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {
  listImage = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  itemWidth: number | undefined;
  config = 4;
  constructor(
    @Inject(GalleryConfig)
    @Optional()
      config: number
  ) {
    if (config) {
      this.config = config;
    }
  }

  ngOnInit(): void {
    this.itemWidth = 100 / this.config;
  }

}
