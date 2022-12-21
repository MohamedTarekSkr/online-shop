import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: '.app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() product: Product = {} as Product;

  constructor(private productService: ProductService) {}
  addProductToCart() {
    this.productService.addProduct(this.product);
  }
  @Input() addHeart(){
    this.productService.getHeartNumber()
  }
}
