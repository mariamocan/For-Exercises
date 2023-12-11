// Print in the console the numbers from the interval [0, 1000] that divide by 13 (split by dot . or indexOf dot . or use the modulo % operator).

for (let i = 13; i < 1000; i++) {
  if (i % 13 === 0) console.log(i);
}

// for (let i = 13; i < 1000; i++) {
//   const no = i / 13;
//   if (no.toString().split(".").length === 1) console.log(i);
// }
