#!/usr/bin/env node
import * as index from '../../src/cli.js';

index.greeting();
const countGames = index.howManyGames();

const isNumberPrime = () => {
  if (Number(countGames)) {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    let flag = 1;
    for (let i = 0; i < countGames; i += 1) {
      const number1 = Math.floor(Math.random() * 100);
      const question = `${number1}`;
      const userAnswer = index.questionAnswer(question);
      const rightAnswer = index.primeNumber(number1);
      index.isRigthAnswer(rightAnswer, userAnswer);
      if (rightAnswer !== userAnswer) {
        flag = 0;
        break;
      }
    }
    if (flag === 1) {
      index.congrats();
    }
  } else {
    console.log('incorrect value');
  }
};

isNumberPrime();
