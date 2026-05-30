// // Cek apakah ada "Mouse"
// // Ambil index "Keyboard"
// // Gabungkan jadi satu string

// // let products = ["Laptop", "Mouse", "Keyboard"];
// // const findMouse = products.includes("Mouse");

// // // console.log(findMouse);
// // // console.log(products.indexOf("Keyboard"));
// // const joinProducts = products.join(" ");
// // const splitArr = joinProducts.split("|");

// // // console.log(joinProducts);

// // const rand = "IANADAOA";
// // console.log(rand.split("A"));

// // "IANADAOA"[("I", "N", "D", "O", "")];

// //====== OBJECT PRACTICE

// // Ambil semua key
// // Ambil semua value
// // Cek apakah punya key=grade

// let student = {
//   name: "Siti",
//   age: 21,
//   major: "Informatics",
// };

// const checkAllKeys = Object.keys(student);
// const checkAllValues = Object.values(student);

// const hasGrade = student.hasOwnProperty("grade");

// student.console.log(checkAllKeys, checkAllValues, hasGrade);

// LOOPING
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
// }

// const arrayScores = [90, 99, 92, 83, 75, 68, 90, 70, 62, 100];

// for (let index = 0; index < arrayScores.length; index++) {
//   checkScore(arrayScores[index]);
// }

// for (let index = 0; index < 3; index++) {
//   console.log(index, "hello", array[index]);
// }

// const array = ["kesatu", "kedua", "ketiga"];
// for (const el of array) {
//   console.log(el);
// }

// let user = {
//   name: "Budi",
//   age: 20,
//   id: 23,
//   key: "99sajdak",
// };

// for (let key in user) {
//   console.log(key, user[key]);
// }

// let i = 0;
// let text = "";
// while (true) {
//   console.log(i);

//   text += "The number is " + i;
//   i++;
// }

// do {
//   text = "The number is " + i;
//   i++;
// } while (100 < 10);

// console.log(text);

// data => 100.000 => 20 menit

// do {
//     100 data dari 10000
// } while (sisa ?)

// object ={
//     key1 : [],
//     key2: [
//         Children:[{}, {},{}]
//     ]
// }

for (let index = 0; index < array.length; index++) {
  if (index % 2 === 0) console.log(index);
}

const todos = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 2,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
];

const me = todos.map((item) => {
  return item;
});

console.log(me);

PROMISE;
let data;

setTimeout(() => {
  data = "User Data"; ////// loading
  console.log({ dataAfter: data });
}, 2000);

console.log({ data });

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ hello: "Hai" });
    }, 2000);
  });
}

getData().then((data) => {
  console.log(data);
  console.log("Hello lagi");
});

function login(isValid) {
  return new Promise((resolve, reject) => {
    if (isValid) {
      resolve({
        userData: {
          id: 1,
          name: "Jamal",
          email: "mal@mail.com",
        },
      });
    } else {
      reject("Login failed");
    }
  });
}

// logic isValid
login(true)
  .then((berhasil) => console.log(berhasil))
  .catch((gagal) => {
    console.log(gagal);
  })
  .finally((final) => {
    console.log("Proses login kamu selesai");
  });

async function p() {
  return Promise((resolve, reject) => {
    let success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data loaded successfully");
      } else {
        reject("Error: Failed to load data");
      }
    }, 3000);
  });
}

console.log(document);
