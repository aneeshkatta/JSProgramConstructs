// var prompt =require('prompt-sync')();
// const num = prompt("What is your number for prime factorization? ");
let num=24;
var x=parseInt(num);
let array=new Array();
let store=array;

for (let i = 0; i < x; i++) {
    if (num % i == 0 && num%i!=undefined) {
        array.push(i);  
      
    }  
}
for (let i = 0; i < store.length; i++) {
console.log(""+store[i]);}