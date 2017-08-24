import { Injectable } from "@angular/core";
import { Order } from "./order.module"

@Injectable()
export class OrderService{

    private orders: Order[] = [
        new Order(
            '001',
            new Date(),
            '9Positions',
            'Andre',
            'Jacobs',
            '123 ABC Lane',
            '',
            'Building A',
            'NYC',
            'NY',
            '11003',
            'USA',
            '9P243',
            '9P243 Wood Bat',
            'Power Model',
            'Maple',
            '33"',
            '2',
            '180',
            'yes',
            'black/white',
            'New',
            'My Bat',
            'I want a great bat'
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