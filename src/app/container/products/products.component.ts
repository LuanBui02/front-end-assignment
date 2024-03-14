import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProducts().subscribe(res => {
      this.productList = res;
      this.productList.forEach((a:any) => {
        Object.assign(a, {quantity: a.quantity,total: a.total});
      });
    });
  }
  addToCart(product:any) {
    this.cartService.addToCart(product);
  }
}
