import {Component, OnInit} from '@angular/core';
import {CartService} from "../../../service/cart.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public searchItem !: string;
  public totalItem: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.getProduct()
      .subscribe(res => {
      this.totalItem = res.length;
    })
  }
  search(key: any) {
    this.searchItem = (key.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchItem);
  }
}
