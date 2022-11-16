import { Buyer } from "./buyers.js";

export class BuyerId extends Buyer {
    constructor(firstName, lastName, city, id) {
        super(firstName, lastName, city);
        this.id = id; // id ירושה //
    }

    getid() {
        return this.id;
    }

    getbuyerVerify() {
        console.log("This id buyer: " + this.id + " reqire verifing id"); //changed to polimorfism //
    }

    printSuccsess() {
        console.log("The buyer: " + this.getfirstName() + " " + this.getlastName() 
        +" live in: " + this.getbuyerCity() + " " + "id number: " + this.getid() + " " + " bought the product successfuly");
    }

    printFailure() {
         console.log("The buyer: " + this.getfirstName() + " " + this.getlastName() 
        +" live in: " + this.getbuyerCity() + " " + "id number: " + this.getid() 
        + " " + " Failure in the process of buying the product");
    }
}
