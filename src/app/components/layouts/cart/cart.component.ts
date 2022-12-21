import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartLine } from 'src/app/interfaces/cart-line';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  
   item=new Cart(JSON.parse(localStorage.getItem('cartline')||'{}'));
}