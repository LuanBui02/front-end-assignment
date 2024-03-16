import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./container/products/products.component";
import {CartComponent} from "./container/cart/cart.component";
import {MenuComponent} from "./container/menu/menu.component";
import {ContentComponent} from "./container/menu/content/content.component";
import {OrderComponent} from "./container/order/order.component";
import {AdminItemComponent} from "./container/admin-item/admin-item.component";
import {AdminOrderComponent} from "./container/admin-order/admin-order.component";
import {AdminUpdateComponent} from "./container/admin-update/admin-update.component";
import {AdminUpdateItemComponent} from "./container/admin-update-item/admin-update-item.component";

const routes: Routes = [
  {path: '', redirectTo: 'content', pathMatch:"full"},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'content', component: ContentComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin-item', component: AdminItemComponent},
  {path: 'admin-order', component: AdminOrderComponent},
  {path: 'admin-update', component: AdminUpdateComponent},
  {path: 'admin-update-item/:id', component: AdminUpdateItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
