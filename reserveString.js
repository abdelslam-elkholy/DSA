"use strict";

let myString = "hey i'm abdelslam elkholy";
let myReservedStr;

const reverseString1 = (str) => {
  if (str && str.length > 1 && isNaN(str)) {
    const backWards = [];

    for (let i = str.length - 1; i >= 0; i--) {
      backWards.push(str[i]);
    }

    return backWards.join("");
  } else {
    console.log("Not valid string");
  }
};

const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};

const reverseString3 = (str) => [...str].reverse.join("");

const reverseString = (str) => {
  let reversed = "";
  for (let char of str) reversed = char + reversed;
};

console.log(reverseString1(myString));
console.log(reverseString1(22));
console.log(reverseString1("22"));
console.log(reverseString1(" i love 333"));
console.log(reverseString1(" "));

console.log("/////////////////////////////////////////////////");

console.log(reverseString2(myString));

console.log("/////////////////////////////////////////////////");

// console.log(reverseString3(myString));
