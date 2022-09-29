import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselComponent } from './carousel/carrousel.component';
import { PictureContainerComponent } from './picture-container/picture-container.component';

@NgModule({
  declarations: [
    PictureContainerComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class NgxPictureCarouselModule { }
