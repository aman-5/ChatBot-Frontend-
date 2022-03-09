import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  base_url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  postOrdersQuery(data: any) {
    return this.http.post<any>(`${this.base_url}/api/orders/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getOrdersQuery() {
    return this.http.get<any>(`${this.base_url}/api/orders`)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateOrdersQuery(data: any, id: any) {
    return this.http.put(`${this.base_url}/api/orders/${id}/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteOrdersQuery(id: any) {
    return this.http.delete<any>(`${this.base_url}/api/orders/${id}/`)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
