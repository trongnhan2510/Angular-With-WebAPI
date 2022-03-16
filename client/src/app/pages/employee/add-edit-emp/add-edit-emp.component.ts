import { Component, OnInit, Input, DoCheck } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  @Input() employee:any;
  employee_ID!:string;
  employee_Name!:string;
  address!:string;
  telePhone!:string;
  chkgender!:boolean;
  dateOfBirth!:any;
  fromDate!:any;
  constructor(private service: SharedService, private datePipe: DatePipe) { 
  }
  ngOnInit(): void {
    this.employee_ID = this.employee.employee_ID;
    this.employee_Name= this.employee.employee_Name;
    this.chkgender = this.employee.gender;
    this.address= this.employee.address;
    this.telePhone = this.employee.telePhone;
    this.dateOfBirth =  this.datePipe.transform(this.employee.dateOfBirth, 'yyyy-MM-dd');
  }
  addEmployee()
  {
    var employee = {
      employee_Name:this.employee_Name,
      gender:this.chkgender,
      address:this.address,
      telephone:this.telePhone,
      dateOfBirth:this.dateOfBirth,
    };
    this.service.addEmployee(employee).subscribe((data:any)=>
    {
      alert("Add new Employee Success");
    });
  }
  updateEmployee()
  {
    var employee = {
      employee_ID:this.employee_ID,
      employee_Name:this.employee_Name,
      gender:this.chkgender,
      address:this.address,
      telePhone:this.telePhone,
      dateOfBirth:this.dateOfBirth,
    };

    this.service.updateEmployee(this.employee_ID,employee).subscribe((data:any)=>
    {
      alert("Edit new Employee Success");
    });
  }
}
