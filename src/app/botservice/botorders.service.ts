import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotordersService {

  base_url = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getOrdersQuery() {
    return this.http.get<any>(`${this.base_url}/api/orders`)
    .pipe(map((res: any) => {
    return res;
    }))
    }

  }