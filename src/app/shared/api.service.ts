import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ApiService {

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/login`);
  }

  postData(payload: any): Observable<any> {
    console.log(payload);
    return this.http.post(`${environment.apiUrl}/create_group`, payload);
  }
}
