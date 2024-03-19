import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AdminItemService {

  constructor(private http: HttpClient) {
  }

  addProduct(product: any) {
    return this.http.post<any>("http://localhost:8080/api/items", product).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    // Return an ErrorObservable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
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
