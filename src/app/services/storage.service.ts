
import { Product } from '../interfaces/product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
   productlist:any[]=[];
  product: Product = {} as Product;
  addProducts(product: Product, quantity: number) {
    for (let i=0; i<quantity ;i++){
    this.productlist.push(product);}
    localStorage.setItem('product', JSON.stringify(this.productlist) );
    
    
  }
  
  getCartLines(): void {
    var cartline = JSON.parse(localStorage.getItem('product')||'{}')
    cartline.reduce((cart:any, { _id,name,image,price,category_id,is_featured,is_recent,


    }:any) => {
      var temp = cart.find((o:any) => o._id === _id);
      if (!temp) {
          cart.push({ _id,name,image,price,quantity:1 ,category_id,is_featured,is_recent,total:price
          });
      } else {
          temp.quantity += 1;
          temp.total+=price;
      }
      localStorage.setItem('cartline', JSON.stringify(cart) )
      console.log();
      return cart;
      
  }, []);

   
  }
  
}
