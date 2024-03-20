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
  public messageSuccess !: string;
  public submitted = false;
  public check = null;
  public messageError !: string;
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
        if(!response) {
          this.messageSuccess = "Item is added"
        }
        console.log(response);
        alert(response.message);
      },
      (error) => {
        alert(error.error.message);
        console.log(product.price);
        this.check = product.price;
        console.log(this.check);
        if(this.check == 0) {
          this.messageError = error.error.message;
        }
      })
  }
}

