


export class Report {
    constructor() {
        this.buyers = [];
    }
    addBuyer(buyer) {
        this.buyers.push(buyer)
    }
    printTheBuyers() {
        this.buyers.forEach(buyer=>{
            buyer.getbuyerVerify();
        });
    }
}