import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-update-item',
  templateUrl: './admin-update-item.component.html',
  styleUrls: ['./admin-update-item.component.scss']
})
export class AdminUpdateItemComponent implements OnInit {
  public messageSuccess !: string;
  public productData: any;

  constructor(private adminService: AdminItemService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
    this.adminService.getProductById(productId).subscribe((data: any) => {
      this.productData = data;
    });
  }

  submit(product: any) {
    if (this.productData) {
      product.id = this.productData.id;
    }
    this.adminService.updateItem(product).subscribe(res => {
      if (res) {
        this.messageSuccess = 'Item is updated';
      }
    })
  }
}
