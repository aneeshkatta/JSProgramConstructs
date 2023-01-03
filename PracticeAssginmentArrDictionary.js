var prompt =require('prompt-sync')();
const num = prompt("What is your number for prime factorization? ");
let array=new Array(num);
let store= new Array();

for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
        array[i] = i;  
      
    }  
    for (let i = 0; i <= store.length; i++) {
        if(array!=undefined)
    store=array; }  
}
for (let i = 0; i <= store.length; i++) {
console.log(""+store[i]);}