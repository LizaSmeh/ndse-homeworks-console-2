#!/usr/bin/env node

const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const commandLine = readline.createInterface({ input, output });

const hiddenNumber = randomNumber(0, 77);
console.log("Загадано число в диапазоне от 0 до 77");

function guessNumber() {
    commandLine.question("Введите число: ", (answer) => {
      const num = Number(answer);
  
      if (isNaN(num)) {
        console.log("Вы ввели не число");
        guessNumber();
      } else if (num === hiddenNumber) {
        console.log(`Вы угадали! Число было ${hiddenNumber }`);
        rl.close();
      } else if (num > hiddenNumber ) {
        console.log(`Ваше число больше загаданного. Попробуйте еще раз.`);
        guessNumber();
      } else {
        console.log(`Ваше число меньше загаданного. Попробуйте еще раз.`);
        guessNumber();
      }
    });
  }
  
  guessNumber();