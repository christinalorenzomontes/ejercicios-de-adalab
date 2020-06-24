"use strict";

const todayYear = 2010;
const four = 4;
const todayYear_plus1 = todayYear + 1;
const todayYear_plus2 = todayYear + 2;
const todayYear_plus3 = todayYear + 3;

if (todayYear % four === 0) {
  console.log(todayYear);
} else if (todayYear_plus1 % four === 0) {
  console.log(todayYear_plus1);
} else if (todayYear_plus2 % four === 0) {
  console.log(todayYear_plus2);
} else if (todayYear_plus3 % four === 0) {
  console.log(todayYear_plus3);
}
