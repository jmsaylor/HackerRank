"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .trim()
    .split("\n")
    .map(str => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function guestTable(generosities) {
  //returns array of total table generosity
  let totals = [];
  generosities.forEach(element => {
    element.shift();
    let total = element.reduce((a, b) => a + b);
    totals.push([total, element.length]);
  });
  return totals;
}
function solve(charm, generosities, greetLimit, numberStudents) {
  // if () {}
  console.log(guestTable(generosities));
  console.log(charm);

  const charmMax = charm.map(array => Math.max(...array));
  console.log(charmMax);

  //   generosityMax =

  for (let x = 0; x < greetLimit; x++) {}
}

function main() {
  let tc = parseInt(readLine(), 10);
  console.log(`tc: ${tc}`);
  for (let tcItr = 0; tcItr < tc; tcItr++) {
    const mn = readLine().split(" ");
    const m = parseInt(mn[0], 10);
    console.log(`(groups) m: ${m}`);
    const n = parseInt(mn[1], 10);
    console.log(`(students per group) n: ${n}`);
    const t = parseInt(mn[2], 10);
    console.log(`(tables of donors) t: ${t}`);
    let charm = Array(m);
    let generosities = Array(t);

    for (let charmRowItr = 0; charmRowItr < m; charmRowItr++) {
      charm[charmRowItr] = readLine()
        .split(" ")
        .map(charmTemp => parseInt(charmTemp, 10));
    }

    for (let tItr = 0; tItr < t; tItr++) {
      generosities[tItr] = readLine()
        .split(" ")
        .map(generositiesTemp => parseInt(generositiesTemp, 10));

      //   guestTable(generosities);
    }

    const k = parseInt(readLine(), 10);

    solve(charm, generosities, k);
  }
}
