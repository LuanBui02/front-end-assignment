import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {
  public products: any;
  public messageSuccess: string | undefined;
  public submitted = false;
  public messageError: undefined | string;
  public errorName: string | undefined;
  public checkPriceWith0: string | undefined;
  public checkPriceChar: string | undefined;
  public nameRequire: string | undefined;
  public priceRequire = "Price is require";

  constructor(private adminService: AdminItemService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.formBuilder.group({
      name: ['', Validators.required],
      price: [0, Validators.required]
    })
  }
  submit(product: any) {
    this.submitted = true;
    let pattern = new RegExp("^[0-9]*$");
    let result=pattern.test(product.price);
    console.log(result);
    if (product.price < 0 ) {
      this.checkPriceWith0 = "Price have to more than 0";
    } else if (!product.name) {
      this.nameRequire = "Name is require";
    } else if (!product.price) {
      this.priceRequire = "Price is require";
    } else if (!result) {
      this.checkPriceChar = "Price is a number"
    } else {
      this.adminService.addProduct(product).subscribe(
        (response: any) => {
          if (!response) {
            this.messageSuccess = "Item is added";
          }
          console.log(response);
          this.errorName = response.message;
        },
        (error) => {
          console.log(error);
          console.log(product.price);
        })
      setTimeout(() => {
        this.errorName = undefined;
      }, 2000);
      setTimeout(() => {
        this.messageSuccess = undefined;
      }, 4000);
    }
  }
}

