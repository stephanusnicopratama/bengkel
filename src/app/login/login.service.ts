import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  login(username: String, password: String) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('http://localhost:3000/checkUser', JSON.stringify({ username: username, password: password }), options)
      .map((response: Response) => {
        const user = response.json();
        if (user) {
          console.log(user);
          localStorage.setItem('currentUser', user.username);
        }
        return user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
