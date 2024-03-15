import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service/cart.service";
import {OrderService} from "../../service/order.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any;
  public increase !: number;
  constructor(private cartService: CartService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
        this.products = res;
      })
    this.cartService.loadCart();
    this.products = this.cartService.getProductInCart();
  }
  total() {
    return this.products.reduce(
      (sum: any, product: any) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
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
  addToOrder() {
    this.orderService.addToOrder(this.products);
  }
}
