import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  public cartItemList: any = [];
  public productListBehav = new BehaviorSubject<any>([]);

  public searchBehav = new BehaviorSubject<string>("")
  constructor() { }

  getProducts() {
    return this.productListBehav.asObservable();
  }

  setProducts(products: any) {
    this.cartItemList.push(...products);
    this.productListBehav.next(products)
  }

  addToCart(products: any) {
    this.cartItemList.push(products);
    this.productListBehav.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    })
    this.productListBehav.next(this.cartItemList)
  }
  removeAllCart() {
    this.cartItemList = [];
    this.productListBehav.next(this.cartItemList);
  }
}
