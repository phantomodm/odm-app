export class Order {
     
    constructor(
        public orderID: string,
        public date: Date,
        public customerDetails: Object,
        public orderDetails: Object)
        {}
        
}