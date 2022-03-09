import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BototherissuesService {

  base_url = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getOtherissuesQuery() {
    return this.http.get<any>(`${this.base_url}/api/otherissues`)
    .pipe(map((res: any) => {
    return res;
    }))
    }

}
