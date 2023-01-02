let array = new Array(9);
let min = 100;
let max = 999;
for (i = 0; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (max - min)) + min;
}
//storeArray=[1,3,8,6,4,7,8,9,9];
for (i = 0; i < array.length; i++) {
    console.log("At index: " + i + " Generated three digit value: " + array[i]);
}
let storeArray = array;
for (i = 0; i < storeArray.length; i++) {
    console.log("At index: " + i + " StoreArray before sort value: " + storeArray[i]);
}
let numbers=storeArray;
SecondLargestNSecondSmallest(numbers);

function SecondLargestNSecondSmallest(numbers)
{
  
  console.log(""+numbers.sort((a, b) => a - b));
  let size=numbers.length;
  console.log("Array size:"+(size+1));
  for(let i=size-2;i>=0;i--)
  {
    if(numbers[i]!=numbers[size-1])
    {
      console.log("the second largest element is "+ numbers[i]);
      console.log("the second smallest element is "+ numbers[1]);
      return;
    }
  }
  console.log("there is no second largest element");
}