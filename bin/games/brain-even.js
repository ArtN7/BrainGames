#!/usr/bin/env node
import * as index from '../../src/cli.js';

index.greeting();
const countGames = index.howManyGames();

const isEvenNumber = () => {
  if (Number(countGames)) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let flag = 1;
    for (let i = 0; i < countGames; i += 1) {
      const number = Math.floor(Math.random() * 100);
      const question = number;
      const userAnswer = index.questionAnswer(question);
      let rightAnswer = 'no';
      if (number % 2 === 0) {
        rightAnswer = 'yes';
      }
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
isEvenNumber();
