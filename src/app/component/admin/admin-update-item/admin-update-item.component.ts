import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-update-item',
  templateUrl: './admin-update-item.component.html',
  styleUrls: ['./admin-update-item.component.scss']
})
export class AdminUpdateItemComponent implements OnInit {
  public messageSuccess !: string;
  public productData: any;
  public submitted = false;

  constructor(private adminService: AdminItemService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    productId &&
    this.adminService.getProductById(productId).subscribe((data: any) => {
      this.productData = data;
    });

    this.productData = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    })
  }

  submit(product: any) {
    this.submitted = true;
    console.log(this.productData);
    if (this.productData) {
      product.id = this.productData.id;
      this.adminService.updateItem(product).subscribe(
        (response) => {
          console.log(response);
          alert(response.message);
          if (!response) {
            this.messageSuccess = "Item is updated!"
          }
        }, (error: any) => {
          console.log(error.error.message);
          alert(error.error.message);
        })
    }
  }
}
