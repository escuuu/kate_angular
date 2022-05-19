import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  baseUrl = environment

  constructor(private http: HttpClient) { }

  login(user: string): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }
}
