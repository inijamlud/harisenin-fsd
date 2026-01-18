// function meet() {
//   console.log("Hello students!");
// }

// function greet(name, age, country) {
//   meet();
//   console.log(`Hello ${name}! I am ${age} years old from ${country}.`);
// }

// // greet("Andi", 25, "Indonesia");

// const meetArrow = () => {
//   meet();
//   console.log("Hello students!");
// };

// const minus = (a, b) => {
//   return a - b;
// };

// const c = minus(10, 5);
// function multiplyMinus(x, y) {
//   return minus(x * y, y);
// }

// (meet) =>
//   (menampilkan =
//     // minus => !menampilkan = menghitung nilai

//     console.log(multiplyMinus(c, 2)));

// // why we should return value from function?

// function checkScore(score) {
//   if (score >= 75) {
//     // console.log("Lulus");
//     return true;
//   } else {
//     // console.log("Tidak lulus");
//   }
// }

// // checkScore(80);
// // checkScore(80);
// // checkScore(80);
// // checkScore(80);

// if (checkScore(80)) {
//   console.log("Selamat ya!");
// }

const n123 = Number("123");
const s10 = String(10);
const btrue = Boolean();

// console.log(n123, s10, btrue);

const scores = [20, 30, 40, 50, 56, 75, 80];
const scoresLength = scores.length;

// console.log("Jumlah skor:", scoresLength);
scores.push(90);
// console.log("Jumlah skor terbaru:", scores.length, scores);
const nilaiJamal = scores[3];
// console.log("Nilai Jamal:", nilaiJamal);
scores.pop();
// console.log(scores);

const scoreUTS = [80, 90, 75, 85, 95];
const scoreUAS = [70, 85, 80, 90, 100];

const allScores = [...scoreUTS, ...scoreUAS];

const filterScore = allScores.filter((score) => score >= 90);
const findSeventy = allScores.find((score) => score == 70);
console.log(" Scores:", findSeventy);

// const allScores = scoreUTS.concat(scoreUAS);
// console.log("All Scores:", allScores);

// // arr.push(), arr.pop(), arr.concat(), arr.length, arr.sort()
// allScores.sort((a, b) => a - b);
// console.log("All Scores Sorted:", allScores);

// OBJECT - key: value
// let user = {
//   name: "Budi",
//   age: 20,
//   isActive: true,
//   address: {
//     city: "Jakarta",
//     country: "Indonesia",
//   },
//   single: false,
// };

// delete user.isActive;

// const gender = user["gender"];
// console.log("before", user);

// user["gender"] = "Male";
// user["phone"] = "8887263";
// user["size"] = "L";

// // user1["spouse"] = user2;
// // console.log("after", user);

// Object.assign(user, { jobTitle: "Student" });
// console.log(Object.keys(user));
// console.log("after", user);

// Jakarta - Indonesia
// console.log(`${user.address.city} - ${user.address.country}`);
// console.log(`${user.address.city.concat(` - ${user.address.country}`)}`);

// console.log(user.name);
// console.log(user.age);
// console.log(user["isActive"]);
