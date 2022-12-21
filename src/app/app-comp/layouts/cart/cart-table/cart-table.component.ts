import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartLines } from 'src/app/interfaces/cart-lines';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css'],
})
export class CartTableComponent {
  @Input() cartLines: CartLines[] = [];
  @Output() limitAlert = new EventEmitter<string>()
  minusIsDisabled = false;
  plusIsDisabled = false;

  decQuantity = (i:number) => {
    if (this.cartLines[i].quantity > 1){
    this.cartLines[i].quantity -= 1;
  }  
  };
  incQuantity = (i:number) => {
    this.cartLines[i].quantity += 1;
    if (this.cartLines[i].quantity>=10){
       this.limitAlert.emit("Limit reached")
       }
    
  };
  remove = (i:number) => {
    return this.cartLines.splice(i, 1) ;
  };
}
