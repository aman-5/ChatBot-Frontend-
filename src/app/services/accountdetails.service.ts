import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {



  base_url = 'http://localhost:8080'
constructor(private http: HttpClient) { }
postAccountDetailsQuery(data: any) {
return this.http.post<any>(`${this.base_url}/api/accountdetails/`, data)
.pipe(map((res: any) => {
return res;
}))
}
getAccountDetailsQuery() {
return this.http.get<any>(`${this.base_url}/api/accountdetails`)
.pipe(map((res: any) => {
return res;
}))
}
updateAccountDetailsQuery(data: any, id: any) {
return this.http.put(`${this.base_url}/api/accountdetails/${id}/`, data)
.pipe(map((res: any) => {
return res;
}))
}
deleteAccountDetailsQuery(id: any) {
return this.http.delete<any>(`${this.base_url}/api/accountdetails/${id}/`)
.pipe(map((res: any) => {
return res;
}))
}

}
