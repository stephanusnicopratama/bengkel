import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManageUserService {

  constructor(private http: Http) { }

  getAllUser() {
    return this.http.get('http://localhost:3000/user/showalluser').map(res => res.json());
  }
}
