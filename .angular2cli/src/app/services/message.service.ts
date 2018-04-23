import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MessageService {
  constructor(private http: HttpClient) { }

  createMessage(data: any){
    return this.http.post('http://localhost:3000/message', data);
  }
  getMessage(data: any){
    return this.http.get('http://localhost:3000/feed', data);
  }
  editMessage(data:any){
    const id = data._id;

    return this.http.put(`http://localhost:3000/feed/${id}`, data);
  }
  deleteMessage(data:any){
    const id = data._id;
    return this.http.put(`http://localhost:3000/feed/${id}`, data);
  }
}

