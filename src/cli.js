// eslint-disable-next-line import/no-extraneous-dependencies
import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-extraneous-dependencies
import _ from 'lodash';

const whoAreYou = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

let name = '';
const greeting = () => {
  console.log('Welcome to the Brain Games!');
  name = whoAreYou();
  console.log(`Hello, ${name}!`);
};

const howManyGames = () => {
  const count = readlineSync.question('how many times do you want to play: ');
  return count;
};

const questionAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isRigthAnswer = (rightAnswer, userAnswer) => {
  if (rightAnswer !== userAnswer) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log('Correct!');
  }
};

const congrats = () => {
  console.log(`Congratulations, ${name}!`);
};

const gcdFind = (number1, number2) => {
  const array1 = [];
  const array2 = [];
  for (let i = 1; i < Math.max(number1, number2); i += 1) {
    if (number1 % i === 0) {
      array1.push(i);
    }
    if (number2 % i === 0) {
      array2.push(i);
    }
  }
  const resultArray = _.intersection(array1, array2);
  return resultArray.at(-1);
};

const arrayProgression = () => {
  const resultArray = [];
  const step = Math.floor(Math.random() * 10);
  const length = Math.floor(Math.random() * 6 + 6);
  resultArray[0] = Math.floor(Math.random() * 50);
  for (let i = 1; i < length - 1; i += 1) {
    resultArray[i] = resultArray[i - 1] + step;
  }
  return resultArray;
};

const primeNumber = (number) => {
  let answer = 'yes';
  for (let i = 2; i < number / 2 + 1; i += 1) {
    if (number % i === 0) {
      answer = 'no';
      break;
    }
  }
  return answer;
};

export {
  greeting,
  questionAnswer,
  isRigthAnswer,
  congrats,
  gcdFind,
  howManyGames,
  arrayProgression,
  primeNumber,
};
