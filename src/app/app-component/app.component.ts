import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'online-shop1';
  isDisabled = true;
  val1 = 'Val1';

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
