import { Component, OnInit } from '@angular/core';
import { ManageUserService } from './manage-user.service';
import { Subject } from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  providers: [ManageUserService]
})
export class ManageUserComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  users: any = [];

  constructor(private userService: ManageUserService) {
    this.dtOptions = {
      paging: false,
      destroy: true,
      // scrollY: '50vh',
      // scrollCollapse: true,
      // scrollX: true,
      // columnDefs: [
      //   {
      //     targets: [1, 12, 16],
      //     visible: false,
      //     searchable: false
      //   }
      // ],
      dom: 'Bfrtip'
    };
  }

  ngOnInit() {
    this.getAllData();
  }

  getAllData() {
    return this.userService.getAllUser().subscribe(data => {
      this.users = data;
      this.dtTrigger.next();
      $('#dt').DataTable().destroy();
    });
  }

  deleteData(username) {
    $('.bs-example-modal-sm').modal('show');
    // return this.userService.deleteUser(username).subscribe(data => {
    //   console.log(data);
    //   if (data.data) {
    //    this.getAllData();
    //   } else {
    //     alert('data gagal di hapus');
    //   }
    // });
  }

}
