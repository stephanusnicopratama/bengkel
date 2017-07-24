import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';

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
];
