// const color = "green";

// switch (color) {
//   case "blue":
//   case "skyblue":
//   case "cyan":
//     console.log("cool");
//     break;

//   case "red":
//     console.log("warm");
//     break;
// }

// function checkScore(score) {
//   if (score >= 75 && score <= 100) {
//     console.log("Lulus");
//   } else if (score >= 0) {
//     console.log("Tidak Lulus");
//   } else {
//     console.log("Nilai invalid");
//   }
// }

// console.log(scores[4]);
// 0 < 10 => i =1 => jalankan checkscore
// 1 < 10 => i =2 => jalankan checkscore
// ... => i = 10
// 10 < 10 ?

// for (let i = 0; i <= Array.length; i++) {
// // console.log(i, `scores[${i}] => `, scores[i]);
// checkScore(scores[i]);
// }

// const scores = [90, 87, 70, 65, 78, 77, 95, 70, 65, 87]; // 10 items

// FOR OF
// for (const score of scores) {
//   console.log(score);
// }

// FOR IN -> OBJECT
// let user = { name: "Budi", age: 27 };

// for (const key in user) {
//   console.log(user[key]);
// }

// WHILE
// let i = 0;
// while (i < 10) {
//   console.log("i = ", i);
//   i++;
// }

// DO WHILE
// let i = 0;
// do {
//   console.log("loop", 1);
// } while (10 < 10);

// while (0 < 10) {
//   console.log("benarr");
// }

//
//
//

// tampilkan, jumlah rata nilai per siswa
// const students = [
//   {
//     name: "Budi",
//     imgUrl: "",
//     scores: [80, 85],
//     address: {
//       city: "Bandung",
//       province: "West Java",
//     },
//   },
//   { name: "Fachrezi", scores: [80, 85] },
//   { name: "Rara", scores: [80, 85] },
// ];

// for (const murid of students) {
//   console.log(murid.name);
//   console.log("=====");
// }

// for (const score of scores) {
//   console.log(score);
// }

// for each
// scores.forEach((score) => {
//   console.log(score);
// });

// const scores = [90, 87, 70, 65, 78, 77, 95, 70, 65, 87]; // 10 items

// const find80 = scores.find((el) => {
//   console.log(el);
//   if (el == 78) return el;
// });
// console.log("====", find80);

// const filterredNUmber = scores.filter((el) => {
//   // var temp = []
//   console.log(el);
//   if (el < 90) return el;
//   temp.push(el)
// });
// console.log(filterredNUmber);

// for (let nilai = 0; nilai < scores.length; nilai++) {
//   console.log(`nilai[${nilai}]`);
// }

// for (const score of scores) {
//   console.log(score);
// }

// const newScores = scores.map((score) => {
//   return score + 5;
// });

// console.log("before", scores);
// console.log("after", newScores);
