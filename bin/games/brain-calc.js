#!/usr/bin/env node
import * as index from '../../src/cli.js';

index.greeting();
const countGames = index.howManyGames();

const calculator = () => {
  if (Number(countGames)) {
    console.log('What is the result of the expression?');
    let flag = 1;
    for (let i = 0; i < countGames; i += 1) {
      const number1 = Math.floor(Math.random() * 100);
      const number2 = Math.floor(Math.random() * 100);
      const operation = Math.floor(Math.random() * 3);
      let question = '';
      let rightAnswer = 0;
      switch (operation) {
        case 0:
          question = `${number1} + ${number2}`;
          rightAnswer = number1 + number2;
          break;
        case 1:
          question = `${number1} - ${number2}`;
          rightAnswer = number1 - number2;
          break;
        case 2:
          question = `${number1} * ${number2}`;
          rightAnswer = number1 * number2;
          break;
        default:
          break;
      }
      let userAnswer = index.questionAnswer(question);
      userAnswer = Number(userAnswer);
      index.isRigthAnswer(rightAnswer, userAnswer);
      if (rightAnswer !== userAnswer) {
        flag = 0;
      }
    }
    if (flag === 1) {
      index.congrats();
    }
  } else {
    console.log('incorrect value');
  }
};

calculator();
