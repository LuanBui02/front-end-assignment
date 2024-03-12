import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>("http://localhost:8080/api/items")
      .pipe(map((res: any) => {
      return res;
    }))
  }
}
