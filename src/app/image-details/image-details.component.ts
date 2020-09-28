import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImagesService} from '../services/images.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  public image: any;
  public id: number;

  constructor(private router: Router, public imagesService: ImagesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot?.params?.id;
    console.log(this.id);
    this.imagesService.getJSON().subscribe((image) => {
      this.image = image[this.id];
      console.log(this.image);
    });
  }

  public navigateTo(navigationPath: any): void {
    this.router.navigate([navigationPath]);
  }

}
