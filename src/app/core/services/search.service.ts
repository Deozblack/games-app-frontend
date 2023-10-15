import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ProductService } from './product.service';
import { Product, ProductElement } from '../interfaces/product.interface';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private http = inject(HttpClient);
  private productService = inject(ProductService);
  private historyService = inject(HistoryService);
  private api = environment.api;

  getProductsByInput(collection: string, term: string){
    return this.http.get<any>(`${this.api}/api/search/${collection}/${term}`).pipe(
      map((resp)=> {
        this.productService.setListProducts(resp.results);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

  getProductsByTags(collection: string, term: string){
    return this.http.get<any>(`${this.api}/api/search/${collection}/${term}`).pipe(
      map((resp)=> {
        this.productService.setListProducts(resp.results);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }

  getLogsByName(collection: string, term: string){
    return this.http.get<any>(`${this.api}/api/search/${collection}/${term}`).pipe(
      map((resp)=> {
        this.historyService.setListLogs(resp.results);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }
}
