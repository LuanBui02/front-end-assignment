import {Injectable} from '@angular/core';
import {CartService} from "./cart.service";

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  constructor(private cartService: CartService) {
  }

  addToOrder() {
    this.cartService.addToOrder();
  }
}
