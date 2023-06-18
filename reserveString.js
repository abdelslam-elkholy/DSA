"use strict";

let myString = "hey i'm abdelslam elkholy";
let myReservedStr;

const reserveString1 = (str) => {
  if (str && str.length > 1 && isNaN(str)) {
    myReservedStr = str.split("").reverse().join("");
    console.log(myReservedStr);
  } else {
    console.log("Not valid string");
  }
};

reserveString1(myString);
reserveString1(22);
reserveString1("22");
reserveString1(" i love 333");
reserveString1(" ");
