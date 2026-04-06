/*SWITCH STATEMENT - To perform multiple actions or to handle multiple scenarios in one program.

Syntax: 
switch(){
case 1:
    statement;
    break;
case 2:
    statement;
    break;
    default;
    statement;
}*/

let a : number = 15;
let b : number = 20;
let choice =4;
/*switch(choice){
    case 1:
    if(a<b)
    {
        console.log("True");
    }
    break;
    case 2:
        if(a>b)
        {
            console.log("False");
        }
        break;
        default:
        console.log("No Match");
}*/

switch(choice){
    case 1:
        console.log("Addition" + (a+b));
        break;
    case 2:
        console.log("Substarction" + (a-b));
        break;
    case 3:
        console.log("Multiply" + (a*b));
        break;
        default:
            console.log("No Match");
}

