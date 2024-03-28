import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./component/shop/products/products.component";
import {CartComponent} from "./component/shop/cart/cart.component";
import {ContentComponent} from "./component/shop/menu/content/content.component";
import {OrderComponent} from "./component/shop/order/order.component";
import {AdminItemComponent} from "./component/admin/admin-item/admin-item.component";
import {AdminOrderComponent} from "./component/admin/admin-order/admin-order.component";
import {AdminUpdateComponent} from "./component/admin/admin-update/admin-update.component";
import {AdminUpdateItemComponent} from "./component/admin/admin-update-item/admin-update-item.component";
import {HomeComponent} from "./component/home/home.component";
import {ItemsComponent} from "./component/home/items/items.component";
import {LoginComponent} from "./component/login/login.component";

const routes: Routes = [
  {path: '', redirectTo: 'items', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'content', component: ContentComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin-item', component: AdminItemComponent},
  {path: 'admin-order', component: AdminOrderComponent},
  {path: 'admin-update', component: AdminUpdateComponent},
  {path: 'admin-update-item/:id', component: AdminUpdateItemComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
