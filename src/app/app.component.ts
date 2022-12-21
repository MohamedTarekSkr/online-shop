import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shop';
  isDisabled = true;
  toggleDisabled(){
    this.isDisabled = !this.isDisabled
  };
  val1 = 'val1'
}
