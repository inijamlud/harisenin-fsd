const btnSimpan = document.getElementById("btn-save");
const inputNama = document.getElementById("name");
const inputJudulBuku = document.getElementById("title");
const bookList = document.getElementById("bookList");
const bookForm = document.getElementById("bookForm");

const arrayBooks = [];
const dataBukuDariStorage = JSON.parse(localStorage.getItem("books")) ?? [];

tampilkanData();

bookForm.addEventListener("submit", (form) => {
  form.preventDefault();

  console.log("nama penulis", inputNama.value);
  console.log("judul buku:", inputJudulBuku.value);

  const valueName = inputNama.value;
  const valueBuku = inputJudulBuku.value;

  // validasi
  if (valueName == "" || valueBuku == "") {
    if (valueName == "") inputNama.classList.add("error-field");
    if (valueBuku == "") inputJudulBuku.classList.add("error-field");

    return;
  } else {
    inputNama.classList.remove("error-field");
    inputJudulBuku.classList.remove("error-field");
  }

  const liElement = document.createElement("li");
  const dataBuku = `${valueName} - ${valueBuku}`;
  liElement.innerHTML = dataBuku;

  arrayBooks.push(...dataBukuDariStorage, dataBuku);

  localStorage.setItem("books", JSON.stringify(arrayBooks));

  bookList.appendChild(liElement);
  inputNama.value = "";
  inputJudulBuku.value = "";
});

function tampilkanData() {
  for (const buku of dataBukuDariStorage) {
    const liElement = document.createElement("li");
    liElement.innerHTML = buku;

    bookList.appendChild(liElement);
  }
}
