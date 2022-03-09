import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotshoppingService {
  
  base_url = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getShoppingQuery() {
    return this.http.get<any>(`${this.base_url}/api/shopping`)
    .pipe(map((res: any) => {
    return res;
    }))
    }

}
