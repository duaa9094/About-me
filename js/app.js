'use strict';

let firstQues = prompt ('Cats can fly?');
console.log(firstQues);

firstQues = firstQues.toLowerCase();

switch(firstQues) {
case 'y':
case 'yes':
  alert('Wrong Answer');
  break;

case 'n':
case 'no':
  console.log('correct');
  alert('Correct Answer');
  break;

}

let secondQues = prompt ('A dozen means 12?');
console.log(secondQues);

secondQues = secondQues.toLowerCase();

switch(secondQues) {
case 'y':
case 'yes':
  console.log('correct');
  alert('Correct Answer');
  break;

case 'n':
case 'no':
  alert('Wrong Answer');
  break;

}

let thirdQues = prompt ('Aqaba is the capital of jordan?');
console.log(thirdQues);

thirdQues = thirdQues.toLowerCase();

switch(thirdQues) {
case 'y':
case 'yes':
  alert('Wrong Answer');
  break;

case 'n':
case 'no':
  console.log('correct');
  alert('Correct Answer');
  break;
}

let fourthQues = prompt ('Tomatos color is red?');
console.log(fourthQues);

fourthQues = fourthQues.toLowerCase();

switch(fourthQues) {
case 'y':
case 'yes':
  console.log('correct');
  alert('Correct Answer');
  break;

case 'n':
case 'no':
  console.log('correct');
  alert('Wrong Answer');
  break;
}

let fifthQues = prompt ('Dead sea is the lowest point on earth?');
console.log(fifthQues);

fifthQues = fifthQues.toLowerCase();

switch(fifthQues) {
case 'y':
case 'yes':
  console.log('correct');
  alert('Correct Answer');
  break;

case 'n':
case 'no':
  alert('Wrong Answer');
  break;
}

let userName = prompt('What is your name?');
alert('You are welcome '+userName+' ,thank you for your time.');



