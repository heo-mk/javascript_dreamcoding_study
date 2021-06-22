// array
// 1. declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ['🥕', '🥑', '🌶', '🍆'];
console.log(fruits)
console.log(fruits.length)
console.log(fruits[2]);
console.log(fruits[-1]);
console.log(fruits[fruits.length-1]);

// 3. looping over an array
// print all fruits
// a. for loop
for (let i=0; i < fruits.length ;i++){
    console.log(fruits[i])
}

// b. for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index) {
    console.log('jieun');
});

fruits.forEach(function (fruit, index) {
    console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit));

// 4. addition, deletion, copy
// push: add an itme to the end - stack, fast
fruits.push('🍢', '🍕');
console.log(fruits);

// pop: remove an item from the end - stack, fast
fruits.pop()
const popped = fruits.pop();
console.log(fruits);

// unshitf: add an item to the beginning - queue, slow
fruits.unshift('🥩','🍤');
console.log(fruits);

// shift: remove an item from the beginning - queue, slow
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift ar slower than pop, push.
// remove an item by index position

// splice : remove an item by index position
fruits.push('🍓', '🍅', '🌰');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🍉','🍈');
fruits.splice(1, 0, '🌷','🌼');
console.log(fruits);

// combine two arrays
const fruits2 = ['🥞','🌭'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index 
console.clear();
console.log(fruits);
// indexOf
console.log(fruits.indexOf('🍉'))
console.log(fruits.indexOf('🥞'))
console.log(fruits.indexOf('🍈'))

// includes
console.log(fruits.includes('🍆'))
console.log(fruits.includes('🌭'))

// lastIndexOf
console.clear();
fruits.push('🍓');
console.log(fruits);
console.log(fruits.indexOf('🍓'))
console.log(fruits.lastIndexOf('🍓'))