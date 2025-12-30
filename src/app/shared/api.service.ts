import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'https://your-backend-url/api'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/data`);
  }

  postData(payload: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/data`, payload);
  }
}
