//IF - To work with only true statement [Works with only 1 condition]
/*Syntax :

if(condition){
   statement;
           }*/


let a : number = 10;
let b : number = 20;
let c : number =30;
let d : number = 40;

if(a<=15){
    console.log("IF Statement executed")
}

// IF ELSE - To work with True and False Statement [Works with 2 conditions either Eamcet or IIT]
/*SYntax:]
 if(condition)
 {
     statement;
 else{
    
    statement;
    }
}*/
if(a+b >=30){
    console.log("If statement is True");
}
else{
    console.log("Print else statement");
}

//ELSE IF - To work with more than one condition or multiple conditions

/* Syntax:
if(condition1){
  statemnts;
}
else if(condition 2){
 statememt;
 }
 else if(condition 3){
 statements;
 }
else{
    statement;
}*/

if(a+b>30){
    console.log("If statement is correct")
}
else if(a+c>40){
    console.log("Else IF 1 Statement is correct")
}
else if(c+d==80){
    console.log("Else IF 2 Statement is correct")
}
else{
    console.log("Else Statement is correct")
}

//NESTED IF - To work with in a condition one more condition

/* Syntax : if(condition1){  - If condition 1 is True, goes into the loop and executes condition 2
              if(condition2){ - If condition 1 is False, directly goes to else outside
                 //statements; - If condition 2 is False, executes else inside.
                 }
                 else{
                    statements;
                
                }
             else{
                Statements;
            }
                {*/
               if(a==10){
                 if(b==20){
                    console.log("a=10 and b-20");
                 }
                 else{
                    console.log("wrong value")
                 }
               }
               else{
                console.log("complete wrong")
               }