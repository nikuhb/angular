import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myProject';
  name: string;

  callNiku(): void {
      this.name = 'niku';
  }

  callAndres() : void {
      this.name = 'andres';
  }
}
