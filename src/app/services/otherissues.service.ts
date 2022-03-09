import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
@Injectable({
providedIn: 'root'
})
export class OtherissuesService {
base_url = 'http://localhost:8080'
constructor(private http: HttpClient) { }
postOtherIssuesQuery(data: any) {
return this.http.post<any>(`${this.base_url}/api/otherissues/`, data)
.pipe(map((res: any) => {
return res;
}))
}
getOtherIssuesQuery() {
return this.http.get<any>(`${this.base_url}/api/otherissues`)
.pipe(map((res: any) => {
return res;
}))
}
updateOtherIssuesQuery(data: any, id: any) {
return this.http.put(`${this.base_url}/api/otherissues/${id}/`, data)
.pipe(map((res: any) => {
return res;
}))
}
deleteOtherIssuesQuery(id: any) {
return this.http.delete<any>(`${this.base_url}/api/otherissues/${id}/`)
.pipe(map((res: any) => {
return res;
}))
}
}