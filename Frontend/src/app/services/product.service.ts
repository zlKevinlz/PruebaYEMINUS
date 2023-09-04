import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    public _httpClient : HttpClient
  ) { }

  listProducts(){
    return this._httpClient.get(`${environment.APIURL}Product`);
  }

  createProduct(product: any){
    return this._httpClient.post(`${environment.APIURL}Product`, product);
  }

  editProduct(product: any){
    return this._httpClient.put(`${environment.APIURL}Product/${product.productId}`, product);
  }

  encode(frase: string, clave: number){
    console.log(frase);
    let code = {
      frase: frase,
      clave: clave
    }
    
    return this._httpClient.post(`${environment.APIURL}Code/encode`, code);
  }

  decode(frase: string, clave: number){
    let code = {
      frase: frase,
      clave: clave
    }
    return this._httpClient.post(`${environment.APIURL}Code/decode`, code);
  }
}