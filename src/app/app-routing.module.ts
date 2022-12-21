import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-comp/layouts/home/home.component';
import { ShopComponent } from './app-comp/layouts/shop/shop.component';
import { DetailComponent } from './app-comp/layouts/detail/detail.component';
import { CartComponent } from './app-comp/layouts/cart/cart.component'; 
import { CheckoutComponent } from './app-comp/layouts/checkout/checkout.component';
import { ContactComponent } from './app-comp/layouts/contact/contact.component';

const routes: Routes = [{path:'', component: HomeComponent},
{path:'shop', component: ShopComponent},
{path:'detail', component: DetailComponent},
{path:'cart', component: CartComponent},
{path:'checkout', component: CheckoutComponent},
{path:'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
