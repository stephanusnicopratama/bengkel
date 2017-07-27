import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor(private http: LoginService) { }

  ngOnInit() {
  }

  login() {
    return this.http.login(this.username, this.password).subscribe(data => { console.log(data) });
  }

}
