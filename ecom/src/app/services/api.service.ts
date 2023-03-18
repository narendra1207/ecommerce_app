import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {


   api:string= "https://fakestoreapi.com/products/";

  constructor(private _http:HttpClient) { }

  getProducts(){
    return this._http.get<any>(this.api)
    .pipe(map((res:any)=>{
      return res;
    }) )
  }


}
