export class Order{
    constructor(
        public adress: string,
        public number: number,
        public optionalAddress: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ){}
}

export class OrderItem{
    constructor(
        public quatity: number,
        public menuId: string
    ){}
}