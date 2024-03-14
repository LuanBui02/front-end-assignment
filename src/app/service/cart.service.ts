import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartComponent} from "../container/cart/cart.component";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartListItem: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartListItem.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartListItem.push(product);
    this.getCostItem(product);
    this.getTotal();
    this.getQuantity(product);
    this.productList.next(this.cartListItem);
  }

  getQuantity(product: any): number{
    let quantity: number = 0;
    this.cartListItem.map((a: any) => {
      if (product.id === a.id) {
        quantity += 1;
        a.quantity = quantity;
        product.quantity = a.quantity;
      }
    })
    return product.quantity;
  }

  getCostItem(product: any): number {
    let costProduct = 0;
    this.cartListItem.map((a: any) => {
      costProduct = a.price * this.getQuantity(product);
      product.total = costProduct;
    })
    return product.total;
  }

  getTotal(): number {
    let costItem = 0;
    this.cartListItem.map((a: any) => {
       costItem+= a.total;
    })
    return costItem;
  }

  removeCartItem(product: any) {
    this.cartListItem.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartListItem.splice(index, 1);
      }
    })
    this.productList.next(this.cartListItem);
  }

  removeAll() {
    this.cartListItem = [];
    this.productList.next(this.cartListItem);
  }
  increaseItem (product:any): number{
    let quantityChange = 0;
    this.cartListItem.map((a: any) => {
      quantityChange= product.quantity + 1;
    })
    return quantityChange;
  }
  decreaseItem (product:any) {
    this.addToCart(product);
  }
}
