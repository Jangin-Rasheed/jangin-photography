import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GalleryComponent} from './gallery/gallery.component';
import {ImageDetailsComponent} from './image-details/image-details.component';


const routes: Routes = [
  {path: 'gallery', component: GalleryComponent},
  {path: 'image_details/:id', component: ImageDetailsComponent},
  {path: '**', component: GalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
