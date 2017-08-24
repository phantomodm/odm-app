export class Order {
     
    constructor(
        public orderID: string,
        public date: Date,
        public companyName:string,
        public firstName: string,
        public lastName: string,
        public address1: string,
        public address2: string,
        public suite: string,
        public city: string,
        public state: string,
        public zipCode: string,
        public country: string,
        public modelSku: string,
        public modelName: string,
        public modelFamily: string,
        public woodType: string,
        public batLength: string,
        public quantity: string,
        public total: string,
        public cuppedBarrel: string,
        public batStain: string,
        public status: string,
        public personaliztion: string,
        public customerNotes: string
        )
        {}
        
}