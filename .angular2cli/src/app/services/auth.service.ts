import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as url from 'url';
import {Observable} from 'rxjs/Observable';

export interface User {
  userName?: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) { }

  login(data: any) {
      return this.http.post('http://localhost:3000/login', data);
  }

  register(data: any) {
    return this.http.post('http://localhost:3000/register', data);
  }



}
