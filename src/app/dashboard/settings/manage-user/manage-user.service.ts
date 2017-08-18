import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ManageUserService {

  constructor(private http: Http) { }

  getAllUser() {
    return this.http.get('http://localhost:3000/user/showalluser').map(res => res.json());
  }

  deleteUser(username: any) {
    const body = JSON.stringify({ username: username });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers, body: body });
    return this.http.delete('http://localhost:3000/user/deleteuser', options).map(res => res.json());
  }

  insertUser(data: any) {
    const params = JSON.stringify({
      username: data.username, password: data.password, email: data.email,
      name: data.name, role: data.role
    });
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/user/insertuser', params, options).map(res => res.json());
  }
}
