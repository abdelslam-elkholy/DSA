"use strict";

let myString = "hey i'm abdelslam elkholy";
let myReservedStr;

const reserveString1 = (str) => {
  if (str && str.length > 1 && isNaN(str)) {
    const backWards = [];
    for (let i = str.length - 1; i >= 0; i++) {
      backWards.push(str[i]);
    }

    return backWards.join[""];
  } else {
    console.log("Not valid string");
  }
};

const reverseString2 = (str) => {
  return str.split("").reverse().join("");
};

const reverseString3 = (str) => [...str].reverse.toString();

console.log(reserveString1(myString));
console.log(reserveString1(22));
console.log(reserveString1("22"));
console.log(reserveString1(" i love 333"));
console.log(reserveString1(" "));
