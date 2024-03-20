import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../service/cart.service";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  public products: any;

  constructor(private cartService: CartService) {
  }

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
      }),
      {quantity: 1, price: 0}
    ).price;
  }

  checkout() {
    alert('Thank you!');
  }

  protected readonly formatDate = formatDate;
}
