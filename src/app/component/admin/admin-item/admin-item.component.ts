import {Component, OnInit} from '@angular/core';
import {AdminItemService} from "../../../service/admin-item.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {
  public products: any;
  public messageSuccess !: string;
  public submitted = false;
  public messageFail !: string;

  constructor(private adminService: AdminItemService, private formBuilder: FormBuilder) {
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
      (response) => {
        alert(response.message);
      },
      (error) => {
        console.log(error);
      });
  }
}

