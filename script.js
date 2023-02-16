"use strict";

let result = "";
const leght = 7;

for (let i = 1; i < leght; i++) {
  for (let j = 0; j < i; j++) {
    result += "*";
  }

  result += "\n";
}

console.log(result);
