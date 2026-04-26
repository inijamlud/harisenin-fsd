const form = document.getElementById("form-tambah");

const btnAdd = document.getElementById("btn-add");
const daftarBukuOrderedList = document.getElementById("daftar-buku");

form.addEventListener("submit", (event) => {
  console.log("ada yg submit form lewat button click add");
  event.preventDefault();

  const inputTitle = document.getElementById("title");
  const inputPenulis = document.getElementById("penulis");
  const inputPenerbit = document.getElementById("penerbit");

  const valuetitle = inputTitle.value;
  const valuePenulis = inputPenulis.value;
  const valuePenerbit = inputPenerbit.value;

  let empty = false;

  if (checkValueEmpty(valuetitle)) {
    inputTitle.classList.add("form-error");
    alert("judul buku kosong. tolong tambah!");
    empty = true;
  } else {
    inputTitle.classList.remove("form-error");
  }

  if (checkValueEmpty(valuePenerbit)) {
    inputPenerbit.classList.add("form-error");
    alert("penerbit buku kosong. tolong tambah!");
    empty = true;
  } else {
    inputPenerbit.classList.remove("form-error");
  }

  if (checkValueEmpty(valuePenulis)) {
    inputPenulis.classList.add("form-error");
    alert("penulis buku kosong. tolong tambah!");
    empty = true;
  } else {
    inputPenulis.classList.remove("form-error");
  }

  if (!empty) {
    // proses tambah list
    const listItem = document.createElement("li");
    listItem.innerHTML = `<h3>${valuetitle} - ${valuePenerbit}:${valuePenulis}<h3>`;
    daftarBukuOrderedList.append(listItem);

    form.reset();
  }
});

function checkValueEmpty(value) {
  if (value == "") return true;
}

function checkValueIsNumber(value) {
  if (typeof value != "number") return false;
}
