import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CartComponent} from "./component/shop/cart/cart.component";
import {MenuComponent} from "./component/shop/menu/menu.component";
import {ProductsComponent} from "./component/shop/products/products.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContentComponent} from './component/shop/menu/content/content.component';
import {OrderComponent} from './component/shop/order/order.component';
import {SearchPipe} from './component/shop/filter/search.pipe';
import {AdminItemComponent} from './component/admin/admin-item/admin-item.component';
import {AdminOrderComponent} from './component/admin/admin-order/admin-order.component';
import {AdminUpdateComponent} from './component/admin/admin-update/admin-update.component';
import {AdminUpdateItemComponent} from './component/admin/admin-update-item/admin-update-item.component';
import {HomeComponent} from './component/home/home.component';
import {ItemsComponent} from './component/home/items/items.component';
import {LoginComponent} from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MenuComponent,
    ProductsComponent,
    ContentComponent,
    OrderComponent,
    SearchPipe,
    AdminItemComponent,
    AdminOrderComponent,
    AdminUpdateComponent,
    AdminUpdateItemComponent,
    HomeComponent,
    ItemsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
