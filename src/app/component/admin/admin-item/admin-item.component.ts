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
    this.adminService.addProduct(product).subscribe(
      (response: any) => {
        if (!response) {
          this.messageSuccess = "Item is added";
        }
        console.log(response);
        this.errorName = response.message;
      },
      (error) => {
        console.log(product.price);
        this.messageError = error.error.message;
      })
    setTimeout(() => {
      this.messageError = undefined;
      this.errorName = undefined;
    }, 2000);
    setTimeout(() => {
      this.messageSuccess = undefined;
    }, 4000);
  }
}

