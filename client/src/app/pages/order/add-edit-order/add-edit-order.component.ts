import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { Customer } from 'src/app/Models/Customer';
import { Employee } from 'src/app/Models/Employee';
import { DatePipe } from '@angular/common';
import { Order } from 'src/app/Models/Order';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-add-edit-order',
  templateUrl: './add-edit-order.component.html',
  styleUrls: ['./add-edit-order.component.css']
})
export class AddEditOrderComponent implements OnInit, DoCheck {
  @Input() order:any;
  order_ID!:number;
  saleofDate!:any;
  total!:number;
  customer_ID!:number;
  employee_ID!:number;  
  listCustomer!:any;
  listEmployee!:any;
  constructor(private service: SharedService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.getCustomerAll();
    this.getEmployeeAll();
    this.order_ID = this.order.order_ID;
    this.saleofDate = this.datePipe.transform(this.order.saleofDate, 'yyyy-MM-dd');
    this.total = this.order.total;
    this.customer_ID = this.order.customer_ID;
    this.employee_ID = this.order.employee_ID;
  }
  ngDoCheck():void{
    this.customer_ID = this.order.customer_ID;
    this.employee_ID = this.order.employee_ID;
  }
  getCustomerAll()
  {
    this.service.getCusAll().subscribe((data:any)=>{
      this.listCustomer = data;
    });
  }
  getEmployeeAll()
  {
    this.service.getEmpAll().subscribe((data:any)=>{
      this.listEmployee = data;
    });
  }
  selectChangeHandlerCus(event:any){
    this.order.customer_ID = event.target.value;
  }
  selectChangeHandlerEmp(event:any)
  {
    this.order.employee_ID = event.target.value;
  }
  addOrder()
  {
    var order = {
      saleofDate:this.saleofDate,
      total:this.total,
      customer_ID:this.customer_ID,
      employee_ID:this.employee_ID,
    };
    this.service.addOrder(order).subscribe((data:any)=>{
      alert("Add new Order Success");
      window.location.reload();
    });
  } 
  updateOrder(){
    var order = {
      order_ID:this.order_ID,
      saleofDate:this.saleofDate,
      total:this.total,
      customer_ID:this.customer_ID,
      employee_ID:this.employee_ID,
    };
    console.log(order);
    this.service.updateOrder(order.order_ID,order).subscribe((data:any)=>{
      alert("Edit new Order Success");
      window.location.reload();
    });
  }
}
