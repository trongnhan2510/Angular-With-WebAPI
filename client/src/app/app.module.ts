import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { ShowCusComponent } from './pages/customer/show-cus/show-cus.component';
import { AddEditCusComponent } from './pages/customer/add-edit-cus/add-edit-cus.component';
import{ SharedService} from './services/shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DatePipe } from '@angular/common';
import { OrderComponent } from './pages/order/order.component';
import { ShowOrderComponent } from './pages/order/show-order/show-order.component';
import { AddEditOrderComponent } from './pages/order/add-edit-order/add-edit-order.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ShowEmpComponent } from './pages/employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './pages/employee/add-edit-emp/add-edit-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent,
    CustomerComponent,
    ShowCusComponent,
    AddEditCusComponent,
    LoginComponent,
    OrderComponent,
    ShowOrderComponent,
    AddEditOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [SharedService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
