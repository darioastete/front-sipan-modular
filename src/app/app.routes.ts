import { Routes } from '@angular/router';
import { LoginComponent } from "./views/layout/login/login.component";
import { HomeComponent } from "./views/dashboard/home/home.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ProductComponent } from "./views/dashboard/maintenance/product/product.component";

export const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path: '',
    component: DashboardComponent,
    children : [
      { path:'', component: HomeComponent }
    ]
  },
  {
    path: 'mantenimiento',
    component: DashboardComponent,
    children : [
      { path:'producto', component: ProductComponent }
    ]
  },

];
