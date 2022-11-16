export class Buyer {
    #firstName;
    #lastName;
    #city;
    constructor(firstName, lastName, city) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#city = city;
    }
    getbuyerVerify() {
        if(this.#firstName == 'Kenya' && this.#lastName == 'West') {
           console.log(this.#firstName + " " +this.#lastName + " are in the block list");
        } else {    
         console.log(this.#firstName + " " + this.#lastName + " " + "are not in the black list");           //נדרס בשביל פולימורפיזם //
        }
    }

   getfirstName() {
     return this.#firstName;  
   }

   getlastName() {
    return this.#lastName;
   }

   getbuyerCity() {
      return this.#city; 
   }

   buyerInfo() {
    console.log("first name: " + this.#firstName + " last name " + this.#lastName + " id: " + getid())
   }

   
    // getBuyerDetails() {
    //     return this.#firstName 
    // }
}