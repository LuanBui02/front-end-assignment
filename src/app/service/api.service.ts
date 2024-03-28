import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
  }
  login(data: any) {
    return this.http.get(
      `http://localhost:8080/api/login/user?username=${data.username}&password=${data.password}`)
  }
}
