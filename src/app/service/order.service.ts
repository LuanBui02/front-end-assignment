import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
import {CartService} from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public cartList: any =[];
  public orderList = new BehaviorSubject([]);
  constructor(private cartService: CartService, private http: HttpClient) { }

  getOrder() {
    return this.http.get<any>("http://localhost:8080/api/orders/3")
      .pipe(map((res: any) => {
        return res;
    }))
  }
  addToOrder(cart: any) {
    this.cartService.addToCart(cart);
  }
}
