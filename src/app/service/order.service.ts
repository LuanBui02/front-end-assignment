import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map} from "rxjs";
import {CartService} from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private cartService: CartService, private http: HttpClient) {
  }

  addToOrder(cart: any) {
    this.cartService.addToCart(cart);
  }
}
