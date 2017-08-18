import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdSidenavModule, MdListModule, MdToolbarModule, MdChipsModule,
  MdIconModule, MdDialogModule
} from '@angular/material';
import { DataTablesModule } from 'angular-datatables';
import { Routes, RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginGuard } from './login/login.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUserComponent } from './dashboard/settings/manage-user/manage-user.component';
import { HomeComponent } from './dashboard/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ManageUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
    MdCardModule,
    MdInputModule,
    HttpModule,
    FormsModule,
    MdSidenavModule,
    MdListModule,
    MdToolbarModule,
    MdChipsModule,
    MdIconModule,
    MdDialogModule,
    NgbModule,
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
