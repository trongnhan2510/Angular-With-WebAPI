import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Models/Order';
import { DatePipe } from '@angular/common';
import { Customer } from 'src/app/Models/Customer';
import { Employee } from 'src/app/Models/Employee';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  listOrders:Order[] = [];
  ModelTitle!:string;
  ActivateAddEditEmpComp:Boolean = false;
  order!:any;
  listCustomers:Customer[] = [];
  listEmployees:Employee[] = [];
  test:any;
  constructor(private service:SharedService, private datePipe: DatePipe) { }
  ngOnInit(): void {
    this.getOrderAll();
    this.getCusAll();
    this.getEmpAll();
  }
  getOrderAll()
  {
    this.service.getOrderAll().subscribe((data:any)=>{
        this.listOrders = data as Order[];
    });
  }
  getCusAll()
  {
    this.service.getCusAll().subscribe((data:any)=>{
      this.listCustomers = data;
    });
  }
  getEmpAll()
  {
    this.service.getEmpAll().subscribe((data:any)=>{
      this.listEmployees = data;
    });
  }
  addClick()
  {
    this.order ={
      order_ID:0,
      saleofDate: this.datePipe.transform(new Date(), 'yyyy-MM-dd'),
      total:1,
      customer_ID:this.listCustomers[0].customer_ID,
      employee_ID:this.listEmployees[0].employee_ID,
    }
    this.ModelTitle="Add Order";
    this.ActivateAddEditEmpComp=true;
  }
  editClick(item:any)
  {
    this.order = item;
    this.ModelTitle="Edit Employee";
    this.ActivateAddEditEmpComp=true;
  }
  closeClick()
  {
    this.ActivateAddEditEmpComp=false;
    this.getOrderAll();
  }
  deleteClick(id:any)
  {
    if (confirm('Are you sure!')) {
      this.service.deleteOrder(id).subscribe((data:any)=>{
        alert("Delete Succcess");
        this.getOrderAll();
      })
    }
  }
}
