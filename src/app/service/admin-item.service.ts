import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminItemService {

  constructor(private http: HttpClient) {
  }

  addProduct(product: any) {
    return this.http.post("http://localhost:8080/api/items", product);
  }

  getProduct() {
    return this.http.get<any[]>("http://localhost:8080/api/items");
  }

  getProductById(id: any) {
    return this.http.get<any>(`http://localhost:8080/api/items/${id}`)
  }

  deleteItem(id: number) {
    return this.http.delete(`http://localhost:8080/api/items/${id}`);
  }

  updateItem(product: any) {
    return this.http.put<any>(`http://localhost:8080/api/items`, product);
  }
}
