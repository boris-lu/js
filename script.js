"use strict";

let result = "";
const leght = 7;

for (let i = 1; i < leght; i++) {
  for (let j = 0; j < i; j++) {
    result += "*"; // присваиваем текстовое значение к результату
  }

  result += "\n";
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First lelel: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second lelel: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) continue first; // выход из цикла, если поставить break - будет полная остановка
      console.log(`Third lelel: ${k}`);
    }
  }
}
