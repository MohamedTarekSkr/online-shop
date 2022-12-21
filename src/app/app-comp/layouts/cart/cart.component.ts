import { Component } from '@angular/core';
import { CartLines } from 'src/app/interfaces/cart-lines';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartLines: CartLines[] = [
    {
      price: 50,
      quantity: 2,
      product: {
        _id: '0',
        category_id: '1',
        description:'',
        image: '/assets/img/product-1.jpg',
        name: 'product-1',
        is_featured:true,
        is_recent:true,
        price: 50,
        discount: 0.1,
        rating: 4.5,
        ratingCount: 55,
      },
    },
    {
      price: 150,
      quantity: 2,
      product: {
        _id: '0',
        category_id: '1',
        description:'',
        image: '/assets/img/product-2.jpg',
        name: 'product-2',
        is_featured:true,
        is_recent:true,
        price: 50,
        discount: 0.1,
        rating: 4.5,
        ratingCount: 55,
      },
    },
  ];

  getSubTotal = (): number => {
    return this.cartLines
      .map((c) => c.quantity * c.price)
      .reduce((acc, v) => (acc = acc + v), 0);
  };

  getShipping = (): number => {
    return this.cartLines.map((c) => c.quantity)
    .reduce((acc, v) => (acc = acc + v), 0) * 10
  };

  getTotal = (): number => {
    return this.getSubTotal()+this.getShipping()
  };

  sendAlert = (msg:String) => {
  return alert(msg)
  }
}
