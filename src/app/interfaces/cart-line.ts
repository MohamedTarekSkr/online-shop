import { Product } from './product';
export class CartLine {
  product: Product;
  quantity: number;
  price: number;
  constructor(product: Product, quantity: number, price: number) {
    this.product = product;
    this.quantity = quantity;
    this.price = quantity;
  }
}
