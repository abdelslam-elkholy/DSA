"use strict";

let myString = "hey i'm abdelslam elkholy";
let myReservedStr;

const reserveString = (str) => {
  myReservedStr = str.split("").reverse().join(" ");
  console.log(myReservedStr);
};

reserveString(myString);
