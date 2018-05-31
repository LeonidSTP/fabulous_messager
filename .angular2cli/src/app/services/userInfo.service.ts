import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface UserInfo{
  avatar?: string,
  firstName: string,
  lastName: string,
  email: string,
  city?: string,
  streetName?: string,
  streetNumber?: number,
  country?: string
}

export class UserInfoService{
  constructor(public http:HttpClient ){}
  create(data: any) {
    return this.http.post('http://localhost:3000/create', data);
  }
}
