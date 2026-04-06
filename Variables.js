"use strict";
class Variableexample {
    z = 60; //Instance Variable
    static d = 30;
    static e = 90;
    add() {
        let a = 10; // Local Variable
        let b = 18.5; // Local Variable
        let sum = a + b; // let sum : number = a + b + c; // gives error as c is not local variable fort this method
        console.log(sum);
    }
    mul() {
        let c = 10;
        let mul = c * this.z; // instance variable is accessible in any method
        console.log(mul);
    }
    div() {
        let div = this.z / Variableexample.d; //Static Variable accessible by classname.staticvariable name
        console.log(div);
    }
    //Static Method
    static sub() {
        let sub = Variableexample.d - Variableexample.e;
        console.log(sub);
    }
    constructor() {
        console.log("Constructor is executed");
    }
}
const obj2 = new Variableexample();
obj2.add();
obj2.mul();
obj2.div();
Variableexample.sub();
