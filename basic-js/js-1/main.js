// const name = "John Doe";
// const index = 2;

// let isStudent = true;
// let x;
// let data = null;
// let gender = {
//   male: 1,
//   female: 0,
//   city: {
//     code: "PWK",
//     name: "PURWAKARTA",
//     phone: 41,
//     postalCode: 41151,
//     regency: {
//       location: {
//         main: "5546466 98468768567",
//       },
//     },
//   },
// };

// isStudent = false;

// console.log({ name, index, isStudent, x, data, gender });
// console.log(gender.female, gender.male, gender.city.regency.location.main);

// OPERATOR
// + / - * %

// const input1 = 8;
// const input2 = 3;

// const result = input1 + input2;
// console.log(input1 + input2);
// console.log(input1 - input2);
// console.log(input1 / input2);
// console.log(input1 * input2);
// console.log(input1 % input2);

// CONDITIONAL

let isStudent = true;
let gender = {
  male: 1,
  female: 1,
  city: {
    code: "PWK",
    name: "PURWAKARTA",
    phone: 41,
    postalCode: 41151,
    regency: {
      location: {
        main: "5546466 98468768567",
      },
    },
  },
};

// if (gender.male == 1) {
//   isStudent = false;
//   gender.city.code = "BDG";
// }

// if (gender.female) console.log("INI WANITA");

// if (isStudent) {
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
//   console.log("DIA PELAJAR");
// } else if (gender.female == 1) {
//   console.log("DIA WANITA");
// } else {
//   console.log("BUKAN PELAJAR");
// }

// console.log(gender.male || gender.female);
// console.log(!isStudent);
// if ((gender.male || gender.female) && !isStudent) {
//   console.log("YEY DAPAT DISCOUNT");
//   const discount = isStudent ? 3000 : 0;
//   console.log(discount);
// }

const color = "green";

let temperature;

switch (color) {
  case "red":
  case "yellow":
  case "orange":
  case "brown":
    temperature = "warm";
    break;

  case "blue":
  case "green":
    temperature = "1";
    break;

  default:
    temperature = "undefined";
    break;
}

console.log(`${temperature === 1 ? "COOL" : "WARM"} COLOR`);
