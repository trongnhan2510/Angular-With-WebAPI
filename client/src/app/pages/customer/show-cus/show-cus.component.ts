import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { formatPercent } from '@angular/common';
import { Customer } from 'src/app/Models/Customer';
import { Order } from 'src/app/Models/Order';
import { SharedService } from 'src/app/services/shared.service';
@Component({
  selector: 'app-show-cus',
  templateUrl: './show-cus.component.html',
  styleUrls: ['./show-cus.component.css']
})
export class ShowCusComponent implements OnInit {
customers:Customer[] = [];
orders:Order[] = [];
ModelTitle!:string;
ActivateAddEditCusComp:Boolean = false;
cus:any;
constructor(private service: SharedService){}
  ngOnInit(): void {
    this.getCusAll();
    this.getOrderAll();
  }
  getCusAll()
  {
    this.service.getCusAll().subscribe((data:any)=>{
      this.customers = data as Customer[];
    });
  }
  getOrderAll()
  {
    this.service.getOrderAll().subscribe((data:any)=>{
      this.orders = data as Order[];
    });
  }
  addClick()
  {
    this.cus ={
      customer_ID:0,
      customer_Name:"",
      address:"",
      telephone:""
    }
    this.ModelTitle="Add Customer";
    this.ActivateAddEditCusComp=true;
  }
  closeClick()
  {
    this.ActivateAddEditCusComp=false;
    this.getCusAll();
  }
  editClick(item:any){
    this.cus=item;
    this.ModelTitle="Edit Customer";
    this.ActivateAddEditCusComp=true;
  }
  deleteClick(id:any)
  {
    if (confirm('Are you sure??')==true) {
      for (let index = 0; index < this.orders.length; index++) {
        if (this.orders[index].customer_ID == id) {
            alert("Có khóa ngoại"); 
            return;         
        }
      }
      this.service.deleteCustomer(id).subscribe((data:any)=>{
        this.getCusAll();
      });
    }
  }
  SearchString(event:any)
  {
    this.service.getCusbyName(event.value).subscribe((data:any)=>{
      this.customers = data as Customer[];
    });
  }
}
