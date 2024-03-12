import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./container/products/products.component";
import {CartComponent} from "./container/cart/cart.component";

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:"full"},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
