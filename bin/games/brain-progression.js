#!/usr/bin/env node
import * as index from '../../src/cli.js';

index.greeting();
const countGames = index.howManyGames();

const progression = () => {
  if (Number(countGames)) {
    console.log('What number is missing in the progression?');
    let flag = 1;
    for (let i = 0; i < countGames && flag === 1; i += 1) {
      const array = index.arrayProgression();
      const indexchange = Math.floor(Math.random() * (array.length));
      const rightAnswer = array[indexchange];
      array[indexchange] = '..';
      let question = '';
      for (let j = 0; j < array.length; j += 1) {
        question += array[j];
        question += ' ';
      }
      let userAnswer = index.questionAnswer(question);
      userAnswer = Number(userAnswer);
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

progression();
