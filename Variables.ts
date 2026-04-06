class Variableexample{
z : number =60; //Instance Variable
static d : number = 30;
static e : number = 90;
    add() : void{
        let a : number = 10; // Local Variable
        let b : number = 18.5; // Local Variable
        let sum : number = a + b; // let sum : number = a + b + c; // gives error as c is not local variable fort this method
        console.log(sum);
      
    }
     mul() : void{
        let c : number = 10;
        let mul : number = c * this.z; // instance variable is accessible in any method
        console.log(mul);
     }

     div() : void{
        let div : number = this.z / Variableexample.d; //Static Variable accessible by classname.staticvariable name
     console.log(div);
    }
 //Static Method

static sub() : void{
    let sub : number = Variableexample.d - Variableexample.e;
    console.log(sub);
}

constructor(){
    console.log("Constructor is executed");
}
}
const obj2 = new Variableexample();
obj2.add();
obj2.mul();
obj2.div();
Variableexample.sub();


