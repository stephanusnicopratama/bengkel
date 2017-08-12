import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  data: any;
  users: any = [];

  constructor() { }

  ngOnInit() {
  }

  tes(tes) {
    console.log($('#username').val());
    console.log(tes);
  }

  getAllData() {

  }

}
