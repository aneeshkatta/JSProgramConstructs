let array = new Array(10);
let min = 100;
let max = 999;
for (i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min)) + min;
}
for (i = 0; i < array.length; i++) {
    console.log("At index: " + i + " Generated three digit value: " + array[i]);
}
let storeArray = array;
for (i = 0; i < storeArray.length; i++) {
    console.log("At index: " + i + " storeArray before sort value: " + storeArray[i]);
}
let xarray = storeArray.slice(0).sort();
for (i = 0; i < xarray.length; i++) {
    console.log("At index: " + i + " after sort value: " + xarray[i]);
}
console.log("Second Largest " + xarray[xarray.length-2]);
console.log("Second smallest " + xarray[1]);
