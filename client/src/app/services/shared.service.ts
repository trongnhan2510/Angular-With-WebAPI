import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions ={
  headers:new HttpHeaders({'Content-Type':'Application/json'})
}
 
@Injectable({
  providedIn: 'root'
})
export class SharedService  {
  readonly APIurl = 'https://localhost:44348/api/';
  constructor(private http: HttpClient) { }
  //Customer
  getCusAll()
  {
    return this.http.get<any>(this.APIurl+'Customers');
  }
  getCusbyName(name:string)
  { 
    return this.http.get(this.APIurl+'Customers/'+name);
  }
  addCustomer(val:any)
  {
    return this.http.post(this.APIurl+'Customers',val);
  }
  updateCustomer(id:any,val:any)
  {
    return this.http.put(this.APIurl+'Customers/'+id,val);
  }
  deleteCustomer(val:any)
  {
    return this.http.delete(this.APIurl+'Customers/'+val);
  }
  // //Employee
  getEmpAll()
  {
    return this.http.get<any>(this.APIurl+'Employees');
  }
  addEmployee(val:any)
  {
    return this.http.post(this.APIurl+'Employees',val);
  }
  updateEmployee(id:any,val:any)
  {
    return this.http.put(this.APIurl+'Employees/'+id,val);
  }
  deleteEmployee(id:any)
  {
    return this.http.delete(this.APIurl+'Employees/'+id);
  }

  //Order
  getOrderAll()
  {
    return this.http.get(this.APIurl+'Orders');
  }
  getByIDOrder(id:any)
  {
    return this.http.get(this.APIurl+'Orders/'+id);
  }
  addOrder(order:any)
  {
    return this.http.post(this.APIurl+'Orders',order);
  }
  updateOrder(id:any,order:any)
  {
    return this.http.put(this.APIurl+'Orders/'+id,order);
  }
  deleteOrder(id:any)
  {
    return this.http.delete(this.APIurl+'Orders/'+id);
  }
}
