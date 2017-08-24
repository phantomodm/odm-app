import { Injectable } from "@angular/core";
import { Order } from "./order.module"

@Injectable()
export class OrderService{

    private orders: Order[] = [
        new Order(
            '001',
            new Date(),
            [{'companyName':'9Positions',
            'firstName':'',
            'lastName':'',
            'address1':'123 ABC Lane',
            'address2': '',
            'suite':'Building A',
            'city':'NYC',
            'state':'NY',
            'zipCode':'11003',
            'country':'USA',
            'shipCompany':'9Positions',
            'shipFirstName':'',
            'shipLastName':'',
            'shipAddress1':'123 ABC Lane',
            'shipAddress2': '',
            'shipSuite':'Building A',
            'shipCity':'NYC',
            'shipState':'NY',
            'shipZipCode':'11003',
            'shipCountry':'USA'}],
            [{
            'modelSku':'9P243',
            'modelName':'9P243 Wood Bat',
            'modelFamily': 'Power Model',
            'woodType':'Maple',
            'batLength': '33"',
            'quantity': 2,
            'total': 180,
            'cuppedBarrel':'yes',
            'batStain': 'black/white',
            'productionStatus':'new',
            'personalization': 'My Bat',
            'customerNotes': ''
            }]
        ) 
    ];

    getOrders(){
        return this.orders.slice();
    }

    getOrderDetail(index: number){
        return this.orders[index];
    }

    getTotalOrderQuantity(){
        return this.orders.length += 1;
    }


}