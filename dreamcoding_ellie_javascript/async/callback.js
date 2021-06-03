'use Strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting.
// hoisting: var, function declartion

// Synchronous callback
function printImmediately(print) {
  print();
};
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
};

console.log('1');
// setTimeout(function() {
//   console.log('2');
// }, 1000);
setTimeout(() => console.log('2'), 1000);
console.log('3');

printImmediately(() => console.log('hello'));
printWithDelay(() => console.log('async callback'), 2000);


// Callback hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === "dream") ||
        (id === 'coder' && password === "academy")
      ) {
        onSuccess(id); // onSuccess 콜백
      } else {
        onError(new Error('not found')); // onError 콜백
      }
    }, 2000);
  } 

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name : 'ellie', role:'admin'});
      } else {
        onError(new Error('no access'));
      } 
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  user => {  
    userStorage.getRoles(
      user,
      userWithRole => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      error => {
        console.log;
      }
    );
  },
  error => {
    console.log(error);
  }
);