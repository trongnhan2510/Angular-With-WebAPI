import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from 'src/app/Models/Employee';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { formatDate, DatePipe } from '@angular/common';
import { Order } from 'src/app/Models/Order';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  employees: Employee[] = [];
  orders: Order[] = [];
  ModelTitle!: string;
  ActivateAddEditEmpComp: Boolean = false;
  employee: any;
  constructor(private service: SharedService, private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.getEmpAll();
    this.getAllOrder();
  }
  getEmpAll() {
    this.service.getEmpAll().subscribe((data: any) => {
      this.employees = data as Employee[];
    });
  }
  getAllOrder() {
    this.service.getOrderAll().subscribe((data: any) => {
      this.orders = data as Order[];
    });
  }
  addClick() {
    this.employee = {
      employee_ID: 0,
      employee_Name: "",
      address: "",
      gender: true,
      telephone: "",
      dateOfBirth: this.datePipe.transform(new Date(), 'yyyy-MM-dd')
    }
    this.ModelTitle = "Add Employee";
    this.ActivateAddEditEmpComp = true;
  }
  closeClick() {
    this.ActivateAddEditEmpComp = false;
    this.getEmpAll();
  }
  editClick(item: any) {
    this.employee = item;
    this.ModelTitle = "Edit Employee";
    this.ActivateAddEditEmpComp = true;
  }
  deleteClick(id: any) {
    if (confirm('Are you sure??') == true) {
      for (let index = 0; index < this.orders.length; index++) {
        if (this.orders[index].employee_ID == id) {
          alert("Có khóa ngoại");
          return;
        }
      }
      this.service.deleteEmployee(id).subscribe((data: any) => {
        alert("Success");
        this.getEmpAll();
      });
    }
  }
}
