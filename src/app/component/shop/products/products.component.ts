import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {CartService} from "../../../service/cart.service";
import {AdminItemService} from "../../../service/admin-item.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList: any;
  public filterCategory: any;
  public searchKey: string = "";

  constructor(private adminItem: AdminItemService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.adminItem.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.total, date: new Date()});
      });
    });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }

  addToCart(product: any) {
    if (!this.cartService.productInCart(product)) {
      this.cartService.addToCart(product);
      console.log(product);
    } else {
      alert("This item is already added to cart")
    }
  }
}
