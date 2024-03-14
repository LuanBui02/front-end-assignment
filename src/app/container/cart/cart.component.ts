import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any;
  public totalPrice !: number;
  public increase !: number;
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.products = res;
        this.totalPrice = this.cartService.getTotal();
      })
  }
  clearAll() {
    this.cartService.removeAll();
  }
  removeItem(item:any) {
    this.cartService.removeCartItem(item);
  }
  increaseButton (product:any) {
    this.cartService.increaseItem(product);
  }
  decreaseButton (product:any) {
    this.cartService.decreaseItem(product);
  }
}
