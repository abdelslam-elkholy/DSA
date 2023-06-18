"use strict";

let myString = "hey i'm abdelslam elkholy";
let myReservedStr;

const reserveString1 = (str) => {
  if (str && str.length > 1 && isNaN(str)) {
    const backWards = [];
    for (let i = str.length - 1; i >= 0; i++) {}
    // console.log(myReservedStr);
  } else {
    console.log("Not valid string");
  }
};

const reverseString2 = (str) => {};
reserveString1(myString);
reserveString1(22);
reserveString1("22");
reserveString1(" i love 333");
reserveString1(" ");
