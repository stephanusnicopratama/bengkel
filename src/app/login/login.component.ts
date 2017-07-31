import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  returnUrl: string;

  constructor(private http: LoginService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/Dashboard';
  }

  login() {
    return this.http.login(this.username, this.password).subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
      });
  }

}
