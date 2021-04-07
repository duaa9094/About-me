'use strict';

let userName = prompt('What is your name?');
alert('You are welcome ' + userName );



let finalScore = 0;
let firstQues = prompt('My favourite meal is mansaf ?');
console.log(firstQues);

firstQues = firstQues.toLowerCase();

switch (firstQues) {
  case 'y':
  case 'yes':
    alert(' Correct Answer, it is very delicious');
    finalScore++;
    break;

  case 'n':
  case 'no':
    alert('Wrong Answer');
    break;

}

let secondQues = prompt('Do I like football ?');
console.log(secondQues);

secondQues = secondQues.toLowerCase();

switch (secondQues) {
  case 'y':
  case 'yes':
    console.log('correct');
    finalScore++;
    alert('Correct Answer');
    break;

  case 'n':
  case 'no':
    alert('Wrong Answer');
    break;

}

let thirdQues = prompt('Did I visit paris?');
console.log(thirdQues);

thirdQues = thirdQues.toLowerCase();

switch (thirdQues) {
  case 'y':
  case 'yes':
    alert('Wrong Answer, I hope thats');
    break;

  case 'n':
  case 'no':
    alert('Correct Answer');
    finalScore++;
    break;
}

let fourthQues = prompt('I graduated from hashemite university?');
console.log(fourthQues);

fourthQues = fourthQues.toLowerCase();

switch (fourthQues) {
  case 'y':
  case 'yes':
    console.log('correct');
    alert('Correct Answer');
    finalScore++;
    break;

  case 'n':
  case 'no':
    console.log('correct');
    alert('Wrong Answer');
    break;
}

let fifthQues = prompt('My favourite singer is sheren?');
console.log(fifthQues);

fifthQues = fifthQues.toLowerCase();

switch (fifthQues) {
  case 'y':
  case 'yes':
    console.log('correct');
    alert('Correct Answer');
    finalScore++;
    break;

  case 'n':
  case 'no':
    alert('Wrong Answer');
    break;
}

 let sixthtQues = prompt('Guess a number between 1 to 20 ?');
  console.log(sixthtQues);

  let correctAnswer=false;
for (let i = 1; i < 4; i++) {
  sixthtQues = parseInt(sixthtQues);
  if (sixthtQues === 14) {
    alert('Bravo, you are lucky');
    correctAnswer=true;
    finalScore++;
    break;
  }
  else if (sixthtQues < 14) {
    //alert('No, it is lower than the correct number try again');
    sixthtQues = prompt('No, it is lower than the correct number try again');
    sixthtQues = parseInt(sixthtQues);

  }
  else if (sixthtQues > 14) {
    //alert('No, it is higher than the correct number');
    sixthtQues = prompt('No, it is higher than the correct number try again');
    sixthtQues = parseInt(sixthtQues);
  }
}
if(!correctAnswer){
  alert('You didnt guess, The correct answer is: 14');
}



let answer = prompt('Can you guess any of my best three colors?');
answer = answer.toLowerCase();
let rightAnswer = ['white', 'black', 'yellow'];

for (let r = 1; r < 6; ++r) {
  let check = rightAnswer.indexOf(answer);
  console.log(check)
  if (check !== -1) {
    alert('Bravo, you are lucky');
    finalScore++;
    break;
  }
  else {
    answer = prompt ('Please try again');
    answer = answer.toLowerCase();
  }

}
alert('these are my best three colors: white, black, yellow');


alert('Thank you for your time '+ userName+ ', here is final score: '+ finalScore );