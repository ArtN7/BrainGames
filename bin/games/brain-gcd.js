#!/usr/bin/env node
import * as index from '../../src/cli.js';

index.greeting();
const countGames = index.howManyGames();

const gcd = () => {
  if (Number(countGames)) {
    console.log('Find the greatest common divisor of given numbers.');
    let flag = 1;
    for (let i = 0; i < countGames; i += 1) {
      const number1 = Math.floor(Math.random() * 100);
      const number2 = Math.floor(Math.random() * 100);
      const question = `${number1} ${number2}`;
      let userAnswer = index.questionAnswer(question);
      const rightAnswer = index.gcdFind(number1, number2);
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

gcd();
