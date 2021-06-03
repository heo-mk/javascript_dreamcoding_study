// sort
let arr = [1, 5, 4, 2, 3];
arr.sort();
console.log(arr);

let arr_string = ['b', 'a', 'k', 'z', 'f'];
arr_string.sort();
console.log(arr_string);

let arr_3 = [27, 8, 5, 13];
arr_3.sort();
console.log(arr_3);

function fn(a, b) {
  return a - b;
}
let arr_callback = [27, 8, 5, 13];
arr_callback.sort(fn);
console.log(arr_callback);

let arr_4 = [27, 8, 5, 13];
arr_4.sort((a, b) => {
  console.log(a,b);
  return a - b;
});
console.log(arr_4);


// reduce
let arr_reduce = [1, 2, 3, 4, 5];
// for, for of, forEach 

let result = 0;
arr_reduce.forEach(num => {
  // result = result + num;
  result += num;
}) 
console.log(result);

const result_reduce = arr_reduce.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result_reduce);

const result_reduce2 = arr_reduce.reduce((prev, cur) => {
  return prev + cur;
}, 100);

console.log(result_reduce2);

// 다른 예제
let userList = [
  { name : "Mike", age: 30},
  { name : "Tom", age: 12},
  { name : "Jane", age: 37},
  { name : "Sue", age: 26},
  { name : "Mike2", age: 2},
];

let result_userList = userList.reduce((prev, cur) => {
  if(cur.age > 19 ){
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result_userList);

let result_userList_totalAge = userList.reduce((prev, cur) => {
  if(cur.age > 19 ){
    prev += cur.age;
  }
  return prev;
}, 0);
console.log(result_userList_totalAge);

let result_userList_nameLength = userList.reduce((prev, cur) => {
  if(cur.name.length === 3){
    prev.push(cur.name);
  }
  return prev;
}, []);
console.log(result_userList_nameLength);

// arr.reduceRight();