import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CallApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CallApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CallApiProvider Provider');
  }

  // Product
  public GetAll()
  {
    return this.http.get('https://localhost:5001/api/ShoppingMall/GetAll');
  }
  public GetbyId(id : string)
  {
    return this.http.get('https://localhost:5001/api/ShoppingMall/GetbyId/'+id);
  }
  public PostProduct(newProduct : any)
  {
    return this.http.post('https://localhost:5001/api/ShoppingMall/PostProduct',newProduct);
  }
  public PutProduct(newProduct : any)
  {
    return this.http.put('https://localhost:5001/api/ShoppingMall/PutProduct',newProduct);
  }
  public DeleteProduct(id : string)
  {
    return this.http.delete('https://localhost:5001/api/ShoppingMall/DeleteProduct/'+id);
  }

  // Shopping Cart
  public GetAllCart()
  {
    return this.http.get('https://localhost:5001/api/ShoppingCart/GetAll');
  }
  public GetbyIdCart(id : string)
  {
    return this.http.get('https://localhost:5001/api/ShoppingCart/GetbyId/'+id);
  }
  public PostCart(newProduct : any)
  {
    return this.http.post('https://localhost:5001/api/ShoppingCart/PostCart',newProduct);
  }
  public PutCart(newProduct : any)
  {
    return this.http.put('https://localhost:5001/api/ShoppingCart/PutCart',newProduct);
  }
  public DeleteCart(id : string)
  {
    return this.http.delete('https://localhost:5001/api/ShoppingCart/DeleteCart/'+id);
  }
}
