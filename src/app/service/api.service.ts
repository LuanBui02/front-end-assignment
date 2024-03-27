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

  userLogin(data: any) {
    return this.http.get(
      `http://localhost:8080/api/login/user/username/password?username=${data.username}&password=${data.password}`,
      {observe: 'response'})
  }

  adminLogin(data: any) {
    return this.http.get(
      `http://localhost:8080/api/login/admin/username/password?username=${data.username}&password=${data.password}`,
      {observe: 'response'})
  }
  addAccountUser(data:any) {
    return this.http.post(
      `http://localhost:8080/api/login/user`, data);
  }
  addAccountAdmin(data:any) {
    return this.http.post(
      `http://localhost:8080/api/login/admin`, data);
  }
}
