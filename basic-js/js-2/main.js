// function checkScore(scoreInFunction = 0) {
//   console.log(scoreInFunction);

//   if (scoreInFunction >= 75 && scoreInFunction <= 100) {
//     console.log("Berhasil");
//   } else if (scoreInFunction == 65 && scoreInFunction < 75) {
//     console.log("Boleh mengulang");
//   } else if (scoreInFunction < 65 && scoreInFunction >= 0) {
//     console.log("Tidak Berhasil");
//   } else {
//     console.log("Nilai tidak dikenali");
//   }

//   scoreInFunction + 100;
// }

// const score = 80;
// const varCS = checkScore(score);

// function addDiscount(total, disc) {
//   total + 10;
//   total * 12;

//   const result = disc * total * 10;
//   return result;
// }

// const total = 10000;
// const totalAfter = addDiscount(total, 5000);
// const totalFinal = addPPN();

// console.log(totalAfter, totalFinal);

// const r = pangkat(4);
// console.log(r);

// const l = 3.14 * pangkat(r);
// console.log(l);

// console.log(pangkat(8) * pangkat(8));

// function pangkat(nilaiAwal) {
//   const total = nilaiAwal * nilaiAwal;
//   return total;
// }

// // arrow function
// const pangkatArr = (nilaiAwal) => {
//   if (nilaiAwal == 2) return 2;

//   const total = pangkat(nilaiAwal);
//   return total;
// };

// const hitung = pangkatArr(2);
// console.log(hitung);

// BUILT IN FUNCTION
// console.log("hello");
// console.info("hai");
// console.error("error");

// const number1 = "10000";
// const ubah = Number(number1);

// console.log(ubah, typeof ubah);

// ARRAY
const fruits = ["Lemon", "Apple", "Grape", "Banana"];
const ilp = fruits.find((f) => f == "Grape");

console.log(fruits.indexOf("Grape"));

// console.log("SEBELUM:", fruits);

// fruits.push("Semangka");

// console.log("AFTER", fruits);

// fruits.pop();
// fruits.pop();
// fruits.unshift("Mango");
// console.log("AFTER 2", "total array:", fruits.length, fruits);

// OBJECTS

let user = {
  name: "Budi",
  age: 20,
  isActive: true,
  email: "budi@mail.com",
  gender: "male",
  socialLinks: {
    x: "@budi_x",
    ig: "@budi_ig",
  },
  education: {
    kindergarden: null,
    location: {
      city: "BDG",
    },
  },
  vechiles: ["honda", "supra", "motor listrik"],
  children: [
    { name: "Anto", age: 10 },
    { name: "Putri", age: 3 },
  ],
};

const putri = user.children.find((c) => {
  return c.name == "Putri";
});

console.log("age of putri", putri.age);

// delete user.socialLinks;
// delete user.education.kindergarden;

user.name = "Harjo";
user.phoneNumber = 827665;
user.education.kindergarden = "TK AL-ISLAM";

Object.assign(user, {
  NIK: 2288921837,
  location: {
    city: "BDG",
  },
});

const objects = Object.entries(user);
// console.log(objects.join(", "));
