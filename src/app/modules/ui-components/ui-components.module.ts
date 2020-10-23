import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPictureComponent } from './components/card-picture/card-picture.component';



@NgModule({
  declarations: [CardPictureComponent],
  exports: [CardPictureComponent],
  imports: [
    CommonModule
  ]
})
export class UiComponentsModule { }
