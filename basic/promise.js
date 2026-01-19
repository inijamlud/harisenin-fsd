// // console.log("start");
// // let value;

// // setTimeout(() => {
// //   value = "User Data";

// //   console.log(value);
// // }, 2000);

// // console.log("end");

// function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("User Data");
//     }, 2000);
//   });
// }

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function login(isValid) {
//   return new Promise((resolve, reject) => {
//     if (isValid) {
//       resolve("Login success");
//     } else {
//       reject("Login failed");
//     }
//   });
// }

// const users = {
//   andi: true,
//   rizki: false,
// };

// login(users.rizki)
//   .then((msg) => console.log(msg))
//   .catch((err) => console.log(err));

function orderFood(order) {
  return new Promise((resolve, reject) => {
    if (order > 2) {
      resolve("order dibuat");
    } else {
      reject("kita gabisa bikin order nya, tanggung masaknya");
    }
  });
}

orderFood(10)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))





  const data = getData()
