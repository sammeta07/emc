import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  groupList(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${environment.apiUrl}/group_list`, data);
  }
}
