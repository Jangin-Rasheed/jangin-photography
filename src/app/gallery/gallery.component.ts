import {Component, OnInit} from '@angular/core';
import {Image} from '../types/image';
import {Router} from '@angular/router';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public image: any[];

  constructor(private router: Router, public imagesService: ImagesService) {
  }

  ngOnInit(): void {
    this.imagesService.getJSON().subscribe(image => {
      this.image = image;
      console.log(this.image);
    });
  }

  public navigateTo(navigationPath: string, id: number): void {
    this.router.navigate([navigationPath, id]);
  }

}
