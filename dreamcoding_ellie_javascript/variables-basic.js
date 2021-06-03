// primitive : number, string, boolean, null, undefined, symbol
let number = 2;
let num = '2';

let age = 2;
let age_string = '2';

let number2 = number;

console.log(number);
console.log(number2);

number2 = 3;
console.log(number);
console.log(number2);

// primitive가 아닌 것 = 전부 object
// object
let obj = {
    name: 'ellie',
    age: 5,
};
// obj = {
//     name: 'seoyeong',
//     age: 29,
// }
console.log(obj.name);

let obj2 = obj;
console.log(obj);
console.log(obj2);
console.log(obj2.age);

obj.name = 'bumkyu';
console.log('------------');
console.log(obj.name);
console.log(obj2.name);


let a = 2;
// let a = 9;

const num_check = 5;
// num_check = 9;  