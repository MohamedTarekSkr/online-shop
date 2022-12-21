import { CartLine } from './cart-line';

export class Cart {
  cartLines:CartLine[];
  constructor(cartLines: CartLine[]) {
    this.cartLines = cartLines
  }
  
  getTotal(): number {
    
    return this.getShipping() + this.getSubTotal();
  }
  getSubTotal(): number {
    
    return this.cartLines
      .map((x:any) => x.price * x.quantity)
      .reduce((a:any, v:any) => (a += v), 0);

  }
  getShipping(): number {
    return (
      this.cartLines.map((x:any) => x.quantity).reduce((a:any, v:any) => (a += v), 0) * 2
    );
  }
  incQuantity(i: number) {
    this.cartLines[i].quantity += 1;
    localStorage.setItem("cartline", JSON.stringify(this.cartLines));
    
    }
    decQuantity(i: number) {
      if (this.cartLines[i].quantity > 1) this.cartLines[i].quantity -= 1;
      localStorage.setItem("cartline", JSON.stringify(this.cartLines));
    
      }
      remove(i: number) {
        this.cartLines.splice(i, 1);
        localStorage.setItem("cartline", JSON.stringify(this.cartLines));
        
      }
       
    }

