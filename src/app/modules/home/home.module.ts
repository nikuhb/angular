import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';



@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
