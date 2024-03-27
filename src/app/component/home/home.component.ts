import { Component, OnInit } from '@angular/core';
import {CartService} from "../../service/cart.service";
import {Router} from "@angular/router";
import {AdminItemService} from "../../service/admin-item.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public searchItem !: string;
  public menuType :string = 'default';
  public totalItem !: number;
  constructor(public cartService: CartService, private router: Router, private adminItem: AdminItemService) { }

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (localStorage.getItem('user')) {
          this.menuType = 'user';
        } else if (localStorage.getItem('admin')) {
          this.menuType = 'admin';
        }
        else {
          this.menuType = 'default';
        }
      }
    });
    this.cartService.getProduct().subscribe((res: any) => {
      this.totalItem = res.length;
    })

    this.cartService.loadCart();
    this.totalItem = this.cartService.getLengthOfProduct();
  }
  search(key: any) {
    this.searchItem = (key.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchItem);
  }

  logOut() {
    localStorage.removeItem('user');
    this.adminItem.cartData.emit([]);
  }

  adminLogOut() {
    localStorage.removeItem('admin');
  }
}
