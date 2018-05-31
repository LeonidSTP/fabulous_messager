import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MainService {
    constructor(private http: HttpClient) {

    }

    public testRequest(data: any): Observable<any> {
        console.log('1111');
        const token = localStorage.getItem('token');
        let headers = new HttpHeaders();
        headers.append('Token', token);
        return this.http.get('http://localhost:3000/users', {headers: headers})
    }
}
