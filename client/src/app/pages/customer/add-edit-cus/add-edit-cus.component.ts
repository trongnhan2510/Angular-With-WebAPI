import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from 'src/app/services/shared.service';
import { Customer } from 'src/app/Models/Customer';

@Component({
  selector: 'app-add-edit-cus',
  templateUrl: './add-edit-cus.component.html',
  styleUrls: ['./add-edit-cus.component.css']
})
export class AddEditCusComponent implements OnInit {
  @Input() cus:any;
  customer_ID!:string;
  customer_Name!:string;
  address!:string;
  telephone!:string;
  index:number = 0;
  
  constructor( private service: SharedService) { 
  }
  ngOnInit(): void {
    this.customer_ID = this.cus.customer_ID,
    this.customer_Name = this.cus.customer_Name,
    this.address = this.cus.address,
    this.telephone = this.cus.telephone
  }
  addCustomer()
  {
    var val = {
      customer_Name:this.customer_Name,
      address:this.address,
      telephone:this.telephone
    }
    this.service.addCustomer(val).subscribe((data:any)=>{
      alert("Add new Customer Success");
      window.location.reload();
    });
  }
  updateCustomer(){
    var val = {customer_ID:this.customer_ID,
      customer_Name:this.customer_Name,
      address:this.address,
      telephone:this.telephone
    };
    this.service.updateCustomer(this.customer_ID,val).subscribe((data:any)=>{
      alert("Edit new Customer Success");
    });
  }
}
