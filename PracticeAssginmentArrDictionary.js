let map = new Map();
let ran = Math.floor(Math.random() * (6 - 1) + 1)
console.log(ran);//1a.roll the dice
for (i = 0; i < 10; i++) {//1b.repeat die roll
  let ran = Math.floor(Math.random() * (6 - 1) + 1)
  //console.log(ran);
}
for (i = 0; i < 10; i++) {//1c.store repeat values in dictionary
  let ran = Math.floor(Math.random() * (6 - 1) + 1)
  key = i;
  value = ran;
  map.set[key, value];
 console.log("Key" + key + "Value" + value);
}