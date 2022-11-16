import { Buyer } from "./buyers.js";
import { BuyerId } from "./extendBuyer.js";
import { Report } from "./report.js";

let buyer1 = new BuyerId('Shimon', 'Cohen,', 'Tel-Aviv', '765765456');
// console.log(buyer1.getbuyerVerify()); //add the id too (ירושה) //


let buyer2 = new Buyer('Eric', 'Mor', 'New-York', '657658639');
// console.log(buyer2.getbuyerVerify()); //buyerDetails changed: = only id and add veritification option = polimorphism//

let buyer3 = new BuyerId('Moti', 'Levi', 'Hulon', '052687650')
console.log(buyer3.printFailure());

let buyer4 = new BuyerId('Dona', 'Shor', 'Raanana', '075476532');
buyer4.printSuccsess();

let buyer5 = new BuyerId('Avshalom', 'Komemi', 'Jerusalem', '053865360')
console.log(buyer5.getbuyerVerify());

let buyer6 = new Buyer('Kenya', 'West', 'Chicago', '000000666');
// console.log(buyer6.getbuyerVerify());

let buyer7 = new Buyer('Dana', 'Amsalem', 'Bat-Yam', '0643578530');
// console.log(buyer7.getbuyerVerify());


let allBuyers = new Report();
allBuyers.addBuyer(buyer2);
allBuyers.addBuyer(buyer6);
allBuyers.addBuyer(buyer3);
allBuyers.addBuyer(buyer5);
allBuyers.addBuyer(buyer4);
allBuyers.addBuyer(buyer7);
allBuyers.printTheBuyers();


