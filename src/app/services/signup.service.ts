import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  base_url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  postSignUPQuery(data: any) {
    return this.http.post<any>(`${this.base_url}/api/signup`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
