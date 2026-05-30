const form = document.getElementById("form-tambah");
const btnAdd = document.getElementById("btn-add");
const daftarBukuOrderedList = document.getElementById("daftar-buku");
const books = getDataFromStorage();
console.log(books);
renderListBuku(books);

async function getDataFromStorage() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const listBuku = fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  return listBuku ?? [];
}

function createDataId() {
  return Date.now();
  const dataExist = getDataFromStorage();
  if (!dataExist.length) return 1;

  return dataExist.length + 1;
}

function renderListBuku(books) {
  daftarBukuOrderedList.innerHTML = "";

  books.forEach((i) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${i.id} - ${i.userId} - ${i.title} <button onclick="deleteBuku(${i.id})">delete</button>`;
    daftarBukuOrderedList.append(listItem);
  });
}

function deleteBuku(id) {
  const q = confirm("apakah mau dihapus?");
  if (q) {
    const bukuYgDihapus = books.find((el) => el.id == id);

    if (bukuYgDihapus) {
      const listBukuTerbaru = books.filter((el) => el.id != bukuYgDihapus.id);

      // proses update list-buku localStorage
      localStorage.setItem("list-buku", JSON.stringify(listBukuTerbaru));
      renderListBuku(listBukuTerbaru);
    }
  }
}

function checkValueEmpty(value) {
  if (value == "") return true;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputTitle = document.getElementById("title");
  const inputPenulis = document.getElementById("penulis");
  const inputPenerbit = document.getElementById("penerbit");

  const valuetitle = inputTitle.value;
  const valuePenulis = inputPenulis.value;
  const valuePenerbit = inputPenerbit.value;

  let errorNotif = false;

  if (checkValueEmpty(valuetitle)) {
    inputTitle.classList.add("form-error");
    alert("judul buku kosong. tolong tambah!");
    errorNotif = true;
  } else {
    inputTitle.classList.remove("form-error");
  }

  if (checkValueEmpty(valuePenerbit)) {
    inputPenerbit.classList.add("form-error");
    alert("penerbit buku kosong. tolong tambah!");
    errorNotif = true;
  } else {
    inputPenerbit.classList.remove("form-error");
  }

  if (checkValueEmpty(valuePenulis)) {
    inputPenulis.classList.add("form-error");
    alert("penulis buku kosong. tolong tambah!");
    errorNotif = true;
  } else {
    inputPenulis.classList.remove("form-error");
  }

  if (!errorNotif) {
    // proses tambah list ke array localStorage
    books.push({
      id: createDataId(),
      title: valuetitle,
      penerbit: valuePenerbit,
      penulis: valuePenulis,
    });

    // proses update list-buku localStorage
    localStorage.setItem("list-buku", JSON.stringify(books));

    form.reset();

    renderListBuku(books);
  }
});
