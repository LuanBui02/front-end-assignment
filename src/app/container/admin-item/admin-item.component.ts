import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../service/api.service";
import {OrderService} from "../../service/order.service";
import {AdminItemService} from "../../service/admin-item.service";

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {
  public products: any;
  public messageSuccess !: string ;
  constructor(private adminService: AdminItemService) { }

  ngOnInit(): void {

  }
  submit(product: any) {
    this.adminService.addProduct(product).subscribe((result) => {
      if(result) {
        this.messageSuccess = 'Product is added';
      }
    });
  }
}
