import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPictureCarouselModule } from 'projects/ngx-picture-carousel/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPictureCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
