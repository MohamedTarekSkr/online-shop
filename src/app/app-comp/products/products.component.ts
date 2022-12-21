import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/products/product.service';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() title: string = '';
  @Input() type: string = '';

  products: Product[] = [];
  constructor(private productservices: ProductService) {}
  ngOnInit(): void {
    const getProducts = (data: any) => {
      this.products = data.data;
    };

    if (this.type == 'featured') {
      this.productservices.getFeaturedProducts().subscribe(getProducts);
    } else this.productservices.getRecentProducts().subscribe(getProducts);
  }
}
