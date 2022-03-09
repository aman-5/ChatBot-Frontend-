import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  base_url = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  postNormalUserQuery(data: any) {
    return this.http.post<any>(`${this.base_url}/api/signin/`, data)
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
