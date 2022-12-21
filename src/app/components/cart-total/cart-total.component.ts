import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-total',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent {
  @Input() shipping: number = 0;
  @Input() subTotal: number = 0;
  @Input() total: number = 0;
}
