// const num = 1;
// const num2 = 2;
// const result = num + num2;
// console.log(result);

// const num3 = 1;
// const num4 = 2;
// const result2 = num3 + num4;
// console.log(result2);

function add(a, b) {
    return a + b;
}

const sum = add(3, 4);
console.log(sum)

const doSomething = add;

const result = doSomething(3, 4);
console.log(result);

const result2 = add(3, 4);
console.log(result2);

// input 없는 함수
function print() {
    console.log('print');
}

print();
print(3, 9);
print(20);

// input 있는 함수
function printF(name, age) {
    console.log(`${name} ${age}`);
}

printF(20, 30)

// callback function
function divide(num1, num2) {
    return num1 / num2;
}

function surprise(callback) {  // 여기선 argument로 전달
    const result = callback(2, 4);  // add(2, 4), 여기선 변수로 전달
    console.log(result); 
}   

surprise(add);
surprise(divide);