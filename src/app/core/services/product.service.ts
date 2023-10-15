import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Product, ProductElement } from '../interfaces/product.interface';
import { BehaviorSubject, of, map, catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private api = environment.api;

  private $products = new BehaviorSubject<ProductElement[] | null>(null);
  
  get products():Observable<ProductElement[] | null>{
    return this.$products.asObservable();
  }

  private $product = new BehaviorSubject<ProductElement | null>(null);

  get product():Observable<ProductElement | null>{
    return this.$product.asObservable();
  }

  resetProduct(){
    this.$product.next(null);
  }

  setListProducts(listProducts:ProductElement[]){
    this.$products.next(listProducts);
  }

  getProducts(){
    return this.http.get<Product>(`${this.api}/api/products`).pipe(
      map((resp)=> {
        this.$products.next(resp.products);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

  getProductById(id: string){
    return this.http.get<ProductElement>(`${this.api}/api/products/${id}`).pipe(
      map((resp)=> {
        this.$product.next(resp);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

  createProduct(product: ProductElement){
    return this.http.post<Product>(`${this.api}/api/products`, product ).pipe(
      map((resp)=> {
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

  updateProduct(product: ProductElement, id:string){
    return this.http.put<ProductElement>(`${this.api}/api/products/${id}`, product ).pipe(
      map((resp)=> {
        this.$product.next(resp);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

  deleteProduct(id:string){
    return this.http.delete<ProductElement>(`${this.api}/api/products/${id}`).pipe(
      map((resp)=> {
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

}
