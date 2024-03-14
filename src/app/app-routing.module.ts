import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./container/products/products.component";
import {CartComponent} from "./container/cart/cart.component";
import {MenuComponent} from "./container/menu/menu.component";
import {ContentComponent} from "./container/menu/content/content.component";
import {OrderComponent} from "./container/order/order.component";

const routes: Routes = [
  {path: '', redirectTo: 'content', pathMatch:"full"},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'content', component: ContentComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
