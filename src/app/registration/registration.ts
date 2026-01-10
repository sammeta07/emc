import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class Registration {
  constructor(private http: HttpClient) {}

  groupCreate(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/group_create`, payload);
  }
}
