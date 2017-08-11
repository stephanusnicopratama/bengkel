import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUserComponent } from './dashboard/settings/manage-user/manage-user.component';
import { HomeComponent } from './dashboard/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Dashboard',
    component: DashboardComponent,
    canActivate: [LoginGuard],
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' },
      { path: 'Home', component: HomeComponent },
      { path: 'ManageUser', component: ManageUserComponent },
    ]
  },
  {
    path: '**',
    redirectTo: '/Login'
  },
];
