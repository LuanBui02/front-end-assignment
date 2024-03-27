import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  public errorName !: string;
  public errorPassword: string = 'Password is require';
  public submitted = false;
  public admins: any;
  public emptyData !: string;

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.admins = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  clickSignUp() {
    this.router.navigate(["/admin-sign-up"]);
  }
  submit(product: any) {
    this.submitted = true;
    if (!product.username) {
      this.errorName = "Name is require"
    } else if (!product.password) {
      this.errorPassword;
    } else {
      this.api.adminLogin(product).subscribe(
        (res: any) => {
          if (res && res.body && res.body.length === 1) {
            localStorage.setItem('admin', JSON.stringify(res.body));
            this.router.navigate(["/products"]);
          }
        }, (error:any) => {
          console.log(error.error);
          this.emptyData = error.error.message;
        }
      );
      this.api.isLoginError.subscribe();
    }
  }
}
