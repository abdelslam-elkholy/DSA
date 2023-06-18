"use strict";

let myString = prompt("enter your string here then okay: ");
let myReservedStr;
const reserveString = (str) => {
  myReservedStr = str.split().reverse().join();
};

alert(myReservedStr);
