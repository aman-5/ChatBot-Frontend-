import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  base_url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  postPaymentQuery(data: any) {
    return this.http.post<any>(`${this.base_url}/api/payment/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getPaymentQuery() {
    return this.http.get<any>(`${this.base_url}/api/payment`)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  updatePaymentQuery(data: any, id: any) {
    return this.http.put(`${this.base_url}/api/payment/${id}/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
  deletePaymentQuery(id: any) {
    return this.http.delete<any>(`${this.base_url}/api/payment/${id}/`)
      .pipe(map((res: any) => {
        return res;
      }))
  }

}