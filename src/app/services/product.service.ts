import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { environment } from 'src/environment/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartProducts: Product[] = [];
  heart:number=0;

  constructor(private httpClient: HttpClient) {}

  getFeaturedProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getFeatured`);
  }

  getProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products`);
  }

  getRecentProducts(): any {
    return this.httpClient.get(`${environment.apiUrl}products/getRecent`);
  }

  addProduct(product: Product): void {
    this.cartProducts.push(product);
  }

  getProductById(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/${id}`)
  }

  getProductByCategoryId(id:string){
    return this.httpClient.get(`${environment.apiUrl}products/getByCategoryId/${id}`);
  }
   getHeartNumber(){
    this.heart+=1
    localStorage.setItem('heart',JSON.stringify(this.heart))
    localStorage.getItem('heart');
  }
  addHeartNumber(){
    return localStorage.getItem('heart')||0;
  }
}
