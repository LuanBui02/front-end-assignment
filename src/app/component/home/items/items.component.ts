import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../../service/api.service";
import {CartService} from "../../../service/cart.service";
import {AdminItemService} from "../../../service/admin-item.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public filterCategory: any;
  public searchKey: string = "";
  constructor(private adminItem: AdminItemService, private cartService: CartService) { }

  ngOnInit(): void {
    this.adminItem.getProduct().subscribe((res: any) => {
      this.filterCategory = res;
    });

    this.cartService.search.subscribe(value => {
      this.searchKey = value;
    });
  }
  login() {
    alert("Please login to shopping");
  }
}
