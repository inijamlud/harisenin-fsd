const body = document.querySelector("ol");

const url = "https://jsonplaceholder.typicode.com/posts";

// XHR
// try {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", url);

//   console.log("sa1");

//   xhr.onreadystatechange = () => {
//     console.log(xhr);

//     if (xhr.readyState == 4 && xhr.status == 200) {
//       const data = JSON.parse(xhr.responseText);
//       console.log("sa2");
//       data.forEach((el) => {
//         const p = document.createElement("li");
//         p.innerText = el.title;
//         body.appendChild(p);
//       });

//       console.log("sa3");
//     }
//   };
//   console.log("sa4");

//   xhr.send();
// } catch (error) {
//   console.log(error);
// }

// JQUERY USES
// $(document).ready(function () {
//   console.log("jQuery sudah siap digunakan!");

//   $.ajax({
//     url: "https://jsonplaceholdklklklkler.typicode.com/users/1",
//     type: "GET",
//     success: function (data) {
//       $("ol").html(`
//                       <p><strong>Nama:</strong> ${data.name}</p>
//                       <p><strong>Email:</strong> ${data.email}</p>
//                   `);
//     },
//     error: function (er) {
//       console.log(er);
//       alert("Gagal mengambil data!");
//     },
//   });
// });

// FETCH
const data = fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((el) => {
      const p = document.createElement("li");
      p.innerText = el.title;
      body.appendChild(p);
    });
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Fetch process completed."));

// console.log(data);

async function getComments() {
  try {
    const resPost = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await resPost.json();

    const resComments = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`,
    );
    const comments = await resComments.json();
    console.log(comments);

    // const resComments = await fetch(
    //   `https://api.com/comments?postId=${posts[0].id}`,
    // );
    // const comments = await resComments.json();

    // console.log("Komentar terakhir:", comments);
  } catch (error) {
    console.error("Terjadi masalah di salah satu langkah:", error);
  }
}

getComments();
