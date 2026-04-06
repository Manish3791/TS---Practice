// While Loop - First checks the condition and then execute the statements
let a : number = 10;
let b : number = 25;
/*Syntax:  while(condition){
              statements;
              increment/decrement
              {

while(a<=15){            
    console.log(a)
    a++
}*/

// do while loop - First Print the Statement and then check the conditions;
/* Syntax : do {
              statement;
              increment/decrement
               }   while(condition);
}*/

/*do {
    console.log(b)
    b++;
} while(b<=30);


do {
    console.log(a);
    a++;
} while(a<=15);

/*For Loop - All the things in one statement
Syntax:
for(initialize;condition;increment/decrement);
{
  statement;
}

for(let i=1;i<=10;i++)
{
    console.log(i);
}

for(let i=1; i<=10;i=i+1)
{
    console.log(i);
}

for(let i=1;i<=10;i=i+2)
{
    console.log(i)
}

for(let i=15; i>=10; i--)
{
    console.log(i);
}*/

//BREAK Statement
for(let i=20;i<=25;i++)
{
    if(i==23)
        //break;
    continue
    console.log(i);
}

/*FOR OF with Array 
Array[] syntax - let sub: number[] = [10, 20, 30, 40, 50, 60, 70];
for of loop Syntax:
for(let of sub){
 statemnt;
 }*/

 let add : number[] = [10, 20, 30, 40, 50, 60, 70];
 console.log(add)
 console.log(add.length);
console.log(add.at (5));