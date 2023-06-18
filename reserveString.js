"use strict";

let myString = "hey im abdelslam elkholy";
let myReservedStr;
const reserveString = (str) => {
  myReservedStr = str.split().reverse().join();
};

console.log(myReservedStr);
