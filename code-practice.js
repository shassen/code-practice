

// This is a file for practicing console.logs and analyzing data types.


let carObj = new Object()
  carObj.make = 'Dodge';
  carObj.model = 'Charger';
  carObj.year =  2011;
  carObj.color = 'Black';
  carObj.drive = 'AWD';


console.log(typeof carObj === 'object');
console.log(carObj);
console.log(carObj.drive);



let today = new Date();
let year = today.getFullYear();
let time = today.getTime();
console.log(year);
console.log(time);
console.log(today.toTimeString());


let goodName = 'BLakE';

console.log('Hello ' + goodName.charAt(0).toUpperCase() + goodName.slice(1).toLowerCase() + '!');


console.log(Object.keys(carObj).length);

let str = 'this is how you do it';
let arr = [1, 2, 3];
console.log(typeof arr);
console.log([...str]);
