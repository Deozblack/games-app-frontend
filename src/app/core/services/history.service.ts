import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { History, Log } from '../interfaces/history.interface';
import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private http = inject(HttpClient);
  private api = environment.api;

  private $logs = new BehaviorSubject<Log[] | null>(null);
  
  get logs():Observable<Log[] | null>{
    return this.$logs.asObservable();
  }

  setListLogs(listLogs:Log[]){
    this.$logs.next(listLogs);
  }

  getHistories(){
    return this.http.get<History>(`${this.api}/api/histories`).pipe(
      map((resp)=> {
        this.$logs.next(resp.logs);
        return resp
      }),
      catchError((error)=>{
        return of(error.error);
      })
    )
  }


}
