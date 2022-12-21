import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-comp/layouts/header/header.component';
import { HomeComponent } from './app-comp/layouts/home/home.component';
import { FooterComponent } from './app-comp/layouts/footer/footer.component';
import { ShopComponent } from './app-comp/layouts/shop/shop.component';
import { DetailComponent } from './app-comp/layouts/detail/detail.component';
import { CartComponent } from './app-comp/layouts/cart/cart.component';
import { CheckoutComponent } from './app-comp/layouts/checkout/checkout.component';
import { ContactComponent } from './app-comp/layouts/contact/contact.component';
import { CategoriesComponent } from './app-comp/categories/categories.component';
import { CategoryComponent } from './app-comp/categories/category/category.component';
import { StarsComponent } from './app-comp/products/product/stars/stars.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartTableComponent } from './app-comp/layouts/cart/cart-table/cart-table.component';
import { CartTotalComponent } from './app-comp/layouts/cart/cart-total/cart-total.component';
import { CartCouponComponent } from './app-comp/layouts/cart/cart-coupon/cart-coupon.component';
import { ProductsComponent } from './app-comp/products/products.component';
import { ProductComponent } from './app-comp/products/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ShopComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    ContactComponent,
    CategoriesComponent,
    CategoryComponent,
    StarsComponent,
    CartTotalComponent,
    CartCouponComponent,
    ProductsComponent,
    ProductComponent,
    CartTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
