import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  username: string;

  constructor() {
    this.username = localStorage.getItem('currentUser');
    // console.log(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

}
