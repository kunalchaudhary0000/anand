import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Register } from '../models/register';
const headerData ={headers: {'Content-Type': 'application/json'}}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
api :string = '/api/users/';
  constructor(private httpClient: HttpClient) { }
  register(register: Register): Observable<any>{
    return this.httpClient.post(this.api+'register', register);
  }
  login(email:string,password:string): Observable<any>{
    return this.httpClient.post(this.api+'login',
    {email,password},headerData);
  }
}
