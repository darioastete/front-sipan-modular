import { Routes } from '@angular/router';
import { LoginComponent } from "./views/layout/login/login.component";
import { HomeComponent } from "./views/dashboard/home/home.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";

export const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children : [
      { path:'home', component: HomeComponent }
    ]
  }
];
