import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';
import { HomeRoutingModule } from './routes/home-routing.module';
import { from } from 'rxjs';


@NgModule({
  declarations: [HomeComponent, HomeCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
