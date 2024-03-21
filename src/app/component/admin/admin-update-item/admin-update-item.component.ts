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

  constructor(private adminService: AdminItemService, private routeActive: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) {
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
        this.errorPrice = error.error.message;
      })
    this.productData = product;
    console.log(this.productData);
    setTimeout(() => {
      this.errorPrice = undefined;
      this.errorName = undefined;
    }, 3000)
  }
}
