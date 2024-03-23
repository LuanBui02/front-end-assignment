import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  public errorName: undefined | string;
  public errorPrice: undefined | string;
  public emptyName: string | undefined;
  public emptyPrice = "Price is require";

  constructor(
    private adminService: AdminItemService,
    private routeActive: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
    let productId = this.routeActive.snapshot.paramMap.get('id');
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
    let pattern = new RegExp("^[0-9]*$")
    let res = pattern.test(product.price)
    if (product.price < 0) {
      this.errorPrice = "Price have to more than 0";
    } else if (!product.name) {
      this.emptyName = "Name is require"
    } else if (!product.price) {
      this.emptyPrice = "Price is require"
    } else if (!res) {
      this.errorPrice = "Price is a number"
    } else {
      if (this.productData) {
        product.id = this.productData.id;
      }
      this.adminService.updateItem(product).subscribe(
        (response) => {
          if (!response) {
            this.messageSuccess = "Item is updated!"
            this.router.navigate(["/admin-update"]);
          }
          console.log(response);
          this.errorName = response.message;
        }, (error: any) => {
          console.log(error.error.message);
        })
      this.productData = product;
      console.log(this.productData);
      setTimeout(() => {
        this.errorPrice = undefined;
        this.errorName = undefined;
      }, 3000)
    }
  }
}
