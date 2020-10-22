import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-picture',
  templateUrl: './card-picture.component.html',
  styleUrls: ['./card-picture.component.scss']
})
export class CardPictureComponent implements OnInit {

  @Input() name: string;
  @Input() picture: string;

  constructor() { }

  ngOnInit(): void {
  }

}
