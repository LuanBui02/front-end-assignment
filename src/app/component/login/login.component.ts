import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../service/api.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public submitted = false;
  public errorName !: string;
  public errorPassword = 'Password is require';
  public emptyData: string | undefined;
  public userList: any;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.userList = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  submit(user: any) {
    this.submitted = true;
    console.log(user)
    if (!user.username) {
      this.errorName = 'Name is require';
    } else if (!user.password) {
      this.errorPassword;
    } else {
      this.api.login(user).subscribe(
        (res: any) => {
          if (res.type == 1) {
            localStorage.setItem('user', JSON.stringify(res.body));
            this.router.navigate(["/products"]);
          } else if (res.type == 0) {
            localStorage.setItem('admin', JSON.stringify(res.body))
            this.router.navigate(["/"])
          }
        }, error => {
          console.log(error)
          this.emptyData = error.error.message;
        }
        );
      this.api.isLoginError.subscribe();
    }
  }
}
