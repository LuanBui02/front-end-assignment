import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  public submitted = false;
  public errorName !: string;
  public errorPassword: string = 'Password is require';
  public errorNameSignUp !: string;
  public errorPasswordSignUp: string = 'Password is require';
  public users: any;
  public emptyData !: string;

  constructor(private api: ApiService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.users = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  clickSignUp() {
    this.router.navigate(["/user-sign-up"])
  }

  signIn(product: any) {
    this.submitted = true;
    if (!product.username) {
      this.errorName = 'Username is require'
    } else if (!product.password) {
      this.errorPassword = 'Password is require'
    } else {
      this.api.userLogin(product).subscribe(
        (result: any) => {
          if (result && result.body && result.body.length === 1) {
            localStorage.setItem('user', JSON.stringify(result.body));
            this.router.navigate(["/products"]);
          } else {
            console.log(result);
          }
        }, (error: any) => {
          console.log(error);
          this.emptyData = error.error.message;
        }
      );
      this.api.isLoginError.subscribe();
    }
  }


}

