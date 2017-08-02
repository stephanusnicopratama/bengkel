import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './login/login.guard';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    canActivate: [LoginGuard]
  },
  {
    path: '**',
    redirectTo: '/Login'
  },
];
