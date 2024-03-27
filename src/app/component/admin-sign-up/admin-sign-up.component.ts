import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrls: ['./admin-sign-up.component.scss']
})
export class AdminSignUpComponent implements OnInit {
  public errorName !: string;
  public errorPassword: string = 'Password is require';
  public submitted = false;
  public admins: any;
  public reported : string | undefined;
  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.admins = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  clickLogIn() {
    this.router.navigate(["/admin-login"])
  }
  submit(product: any) {
    this.submitted = true;
    if (!product.username) {
      this.errorName = "Name is require"
    } else if (!product.password) {
      this.errorPassword;
    } else {
      this.api.addAccountAdmin(product).subscribe(
        (res: any) => {
          if (res) {
            console.log(res)
            this.reported = res.message;
          }
        }
      );
      this.api.isLoginError.subscribe();
      setTimeout(() => {
        this.reported = undefined;
      }, 3000)
    }
  }
}
