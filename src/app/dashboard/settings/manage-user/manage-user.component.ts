import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ManageUserService } from './manage-user.service';
import { Subject } from 'rxjs/Rx';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import * as alertify from 'alertifyjs';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  providers: [ManageUserService, NgbAccordionConfig],
  encapsulation: ViewEncapsulation.None
})
export class ManageUserComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  users: any = [];

  constructor(private userService: ManageUserService, config: NgbAccordionConfig) {
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
    config.closeOthers = true;
    config.type = 'info';
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
    alertify.confirm('Delete', 'Are u sure want to delete?',
      () => {
        return this.userService.deleteUser(username).subscribe(data => {
          if (data.data) {
            this.getAllData();
            alertify.success('data berhasil di hapus');
          } else {
            alertify.error('data gagal di hapus');
          }
        });
      },
      () => {
      });

  }

}
