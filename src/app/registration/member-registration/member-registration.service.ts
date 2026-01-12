import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';


@Injectable({
  providedIn: 'root',
})
export class MemberRegistrationService {
    constructor(private http: HttpClient) {}
  
    memberCreate(payload: any): Observable<any> {
      return this.http.post(`${environment.apiUrl}/member_create`, payload);
    }
}
