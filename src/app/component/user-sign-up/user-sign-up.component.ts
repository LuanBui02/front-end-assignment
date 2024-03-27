import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../service/api.service";
import {Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.scss']
})
export class UserSignUpComponent implements OnInit {
  public submitted = false;
  public errorNameSignUp !: string;
  public user: any;
  public errorPasswordSignUp = 'Password is require';
  public messageSuccess !: string;
  public duplicateName : string | undefined;
  constructor(private api: ApiService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.user = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  clickSignUp() {
    this.router.navigate(["/user-login"])
  }
  signUp(product: any) {
    this.submitted = true;
    if (!product.username) {
      this.errorNameSignUp = 'Name is require'
    } else if (!product.password) {
      this.errorPasswordSignUp = 'Password is require'
    } else {
      this.api.addAccountUser(product).subscribe(
        (res: any) => {
          if (res) {
            console.log(res)
            this.duplicateName = res.message;
          }
        })
    }
    setTimeout(() => {
      this.duplicateName = undefined;
    }, 3000)
  }
}
