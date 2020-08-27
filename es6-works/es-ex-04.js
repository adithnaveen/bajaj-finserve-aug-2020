// working with classes 
// but behind the screen it is function 

class Person {
    constructor(){
        this.name = "Vishal"; 
        this.city="Delhi"; 
    }

    printPerson() {
        console.log("Name : " , this.name);
        console.log("City : ", this.city);
    }

}

let p1 = new Person() ; 
console.log(p1);
console.log(typeof(p1));
p1.printPerson(); 