// ! operator just gives opposite of the input if input is true output is false

let e = true;
console.log(!e);


let a=7;
let b=6;
let c=9;
let d=8;

if(!(a>b && c>d))  // here we can se the output of && is true but due to ! operator outcome is false hence else statement is running
{
    console.log("Bigger");
}
else{
    console.log("No Output");
}