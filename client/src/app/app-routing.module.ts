import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './pages/customer/customer.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { EmployeeComponent } from './pages/employee/employee.component';

const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'customer',component:CustomerComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'order',component:OrderComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
