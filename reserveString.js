"use strict";

let myString = "hey i'm abdelslam elkholy";
let myReservedStr;

const reserveString = (str) => {
  if (str && str.length > 1 && isNaN(str)) {
    myReservedStr = str.split("").reverse().join("");
    console.log(myReservedStr);
  } else {
    console.log("Not valid string");
  }
};

reserveString(myString);
reserveString(22);
reserveString("22");
reserveString(" i love 333");
reserveString(" ");
