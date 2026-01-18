const isFromJava = true;
const w = 11; // weight
let result = 0;

const price = { java: 5000, nonJava: 5500 };
let disc = w > 10 ? w * 500 : 0;

if (isFromJava) {
  result = w * price.java;
} else {
  result = w * price.nonJava - disc;
}

console.log("total ongkir:", result, disc, result - disc);
