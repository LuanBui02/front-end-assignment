import { Component, OnInit } from '@angular/core';
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.scss']
})
export class AdminOrderComponent implements OnInit {
  public products: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe((res) => {
        this.products = res;
      })
    this.cartService.loadCart();
    this.products = this.cartService.getProductInCart();

  }
  totalSum(): number {
    return this.products.reduce((sum: any, product: any) => ({
      quantity: 1,
      price: sum.price + product.quantity * product.price,
    })).price;

  }

}
