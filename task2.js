"use strict";

const str = "JavaScript Exercises";

const strReplace = str.replace(" ", "");

const result = strReplace.slice(0, -1).slice(1);

const finallyResult = `${strReplace.charAt(0).toLowerCase()}${result}`;

console.log(finallyResult);




