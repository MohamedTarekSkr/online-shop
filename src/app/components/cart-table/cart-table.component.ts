import { Component,  Input,OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartLine } from 'src/app/interfaces/cart-line';


@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent  {
  
 
   @Input() item:any=Cart;
   
  
}
