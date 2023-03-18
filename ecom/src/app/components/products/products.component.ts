import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productList: any;
  public filterCategory: any;
  public searchKey: string = "";
  constructor(private _apiService: ApiService, private _cartService: CartService) { }

  ngOnInit(): void {
    this._apiService.getProducts().subscribe(res => {

      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a: any) => {
        if (a.category === "women's clothing" || a.category === "men's clothing") {
          a.category = "fashion";
        }
        Object.assign(a, { quantity: 1, total: a.price })

      });
      // console.log(this.productList)
    });
    this._cartService.searchBehav.subscribe((val: any) => {
      this.searchKey = val
    })
  }

  addtocart(item: any) {
    this._cartService.addToCart(item)
  }

  filters(categ: any) {
    this.filterCategory = this.productList.
      filter((a: any) => {
        if (a.category == categ || categ == "") {
          return a;
        }
      })
  }
}
