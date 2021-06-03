// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - perfroms a task or calculates a value

// 1. Function declartion
// function name(param1, param2) {body... return; }
// one function === one thing 
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('hh99')
log(1234)


// 2. Parameters
// Premitive parameters: passed by value
// Object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const hh99 = {name: 'mkmkheo'};
changeName(hh99);
console.log(hh99);


// 3. Default parameters (added in ES6)
function showMessage1(message, from) {
    console.log(`${message} by ${from}`);
}
showMessage1('miniproject!!!')

function showMessage2(message, from) {
    if (from === undefined) {
        from = 'unknown';
    }
    console.log(`${message} by ${from}`);
}
showMessage2('for 2 weeks')

function showMessage3(message, from= 'not known') {
    console.log(`${message} by ${from}`);
}
showMessage3('ajax axios hahahahaha')


// 4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    console.log('----------------')
    for (const arg of args) {
        console.log(arg);
    }
    console.log('----------------')
    args.forEach((arg) => console.log(arg));
}
printAll('hh99', 'bunkyu', 'minkyu');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage);
    // return undefined;
}

printMessage();
// console.log(message);

// 6. Return a value
console.log(sum(3, 8));
function sum(a, b) {
    return a + b;
}

const result = sum(1, 2); 
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad case
function upgradeUser1(user) {
    if (user.point > 10) {
        // long upgrade logic ... 
    }
}

// good case
function upgradeUser2(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic... 
}

// 8. functon expression
// First-class function 
// functions are treated like any other variable 
// can be assigned as a value to variable
// can be passed as an argument to other functions. 
// can be returned by another function 

// 1. function expression 
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

// print();
const print = function () {  // anonymous function or named function 
    console.log('print');
};
print();
const printAgain = print; 
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
// 함수를 인자로 주고, 상황에 맞으면 그 함수를 호출하는 것 : 콜백함수
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

const printYes = function () { // anonymous function 
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function prints() { // named function 
    console.log('no!');
    // prints()
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 3. Arrow function 
// always anonymous
const simplePrint1 = function () {
    console.log('simplePrint');
};

const simplePrint2 = () => console.log('simplePrint');

const add = function (a, b) {
    return a + b;
}

const add3 = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// 4. IIFE = Immediately Invoked Function Expression
// 선언과 동시에 호출하기 
(function hello() {
    console.log('IIFE');
})();
// hello();

// Quiz
// funcition calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

// function calculate(command, a, b) {
//     if (!command) {
//         return;
//     } else {
//         command(a, b);
//     };
// };

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
};

function multiply(a, b) {
    return a * b;
};

function remainder(a, b) {
    return a % b;
};

// console.log(calculate(12,4));
// console.log(calculate(add,2,3));
// console.log(calculate(substract, 2,3));
// console.log(calculate(divide, 2,3));
// console.log(calculate(multiply, 2,3));
// console.log(calculate(remainder, 2,3));

// 정해진 데이터 처리 : switch문 사용해서 만들기
function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('substract', 4, 9));