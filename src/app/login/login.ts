import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Login {
  constructor(private http: HttpClient) {}

  groupLogin(payload: any): Observable<any> {
    console.log(payload);
    return this.http.post(`${environment.apiUrl}/group_login`, payload);
  }
}
