import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartListItem: any = [];
  public productList = new BehaviorSubject<any>([]);
  public date = new Date();
  public search = new BehaviorSubject<string>("");

  constructor(private http: HttpClient) {
  }

  getProduct() {
    return this.productList.asObservable();
  }
  productInCart(product: any): boolean{
    return this.cartListItem.findIndex((x: any) => x.id === product.id) > -1;
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.cartListItem));
  }
  getProductInCart() {
    return this.cartListItem;
  }
  loadCart(): void {
    this.cartListItem = JSON.parse(localStorage.getItem('cart_items') as any) || [];
  }
  addToCart(product: any) {
    this.cartListItem.push(product);
    this.productList.next(this.cartListItem);
    this.getDate();
    this.saveCart();
  }

  removeCartItem(product: any) {
    let indexToRemove = this.cartListItem.findIndex((a: any) => product.id === a.id);

    if (indexToRemove !== -1) {
      this.cartListItem.splice(indexToRemove, 1);
    }
    this.saveCart();
  }

  getDate(): any {
    this.date = new Date();
    this.productList.next(this.cartListItem);
  }

  removeAll() {
    this.cartListItem = [];
    this.productList.next(this.cartListItem);
    this.saveCart();
  }

  increaseItem(product: any): any{
    product.quantity += 1;
    product.total = product.quantity * product.price;
    this.saveCart();
  }

  decreaseItem(product: any) {
    if(product.quantity > 1) {
      product.quantity -= 1;
      product.total -= product.price;
    }
    this.saveCart();
  }
}
