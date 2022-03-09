import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  base_url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  postShoppingQuery(data: any) {
    return this.http.post<any>(`${this.base_url}/api/shopping/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getShoppingQuery() {
    return this.http.get<any>(`${this.base_url}/api/shopping`)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updateShoppingQuery(data: any, id: any) {
    return this.http.put(`${this.base_url}/api/shopping/${id}/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deleteShoppingQuery(id: any) {
    return this.http.delete<any>(`${this.base_url}/api/shopping/${id}/`)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
