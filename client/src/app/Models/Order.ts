export class Order{
    order_ID:number;
    saleofDate:Date;
    total:number;
    customer_ID:number;
    employee_ID:number;
    /**
     *
     */
    constructor(order_ID:number,saleofDate:Date,
        total:number,
        customer_ID:number,
        employee_ID:number) {
            this.order_ID = order_ID;
           this.saleofDate =saleofDate;
           this.total =total;
           this.customer_ID =customer_ID;
           this.employee_ID =employee_ID;
    }
}