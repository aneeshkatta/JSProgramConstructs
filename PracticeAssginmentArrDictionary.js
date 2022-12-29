let array = new Array(10);
let min = 100;
let max = 999;
for (i = 0; i < array.length; i++) {
    array[i] =Math.floor(Math.random() * (max - min)) + min; 
}
for (i = 0; i < array.length; i++) {
    console.log("At index: "+i+" value: "+array[i]);
}
let storeArray=array;
for (i = 0; i < storeArray.length; i++) {
    console.log("At index: "+i+" storeArray value: "+storeArray[i]);
}

