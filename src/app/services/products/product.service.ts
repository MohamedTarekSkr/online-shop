import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  heartProducts: Product[] = [];
  cartProducts: Product[] = [];

  constructor(private httpclient:HttpClient) { }

  getFeaturedProducts():any {
    return this.httpclient.get(`${environment.apiUrl}products/getFeatured`)
  }

  getRecentProducts():any {
    return this.httpclient.get(`${environment.apiUrl}products/getRecent`)
  }

  addProduct(product:Product): void {
    this.cartProducts.push(product);
  }

  addHeart(product:Product): void {
    this.heartProducts.push(product)
  }
}
