import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CartComponent} from "./container/cart/cart.component";
import {MenuComponent} from "./container/menu/menu.component";
import {ProductsComponent} from "./container/products/products.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ContentComponent } from './container/menu/content/content.component';
import { OrderComponent } from './container/order/order.component';
import { SearchPipe } from './filter/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    MenuComponent,
    ProductsComponent,
    ContentComponent,
    OrderComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [SearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
