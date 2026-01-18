// // document object model
// // console.log(document);

// const title = document.getElementsByClassName("tampilTitle");

// const titles = document.querySelector("p");
// const titlesAll = document.querySelectorAll("p");

// const btnAdd = document.getElementById("btn-add");

// const p3 = document.createElement("p");
// p3.innerHTML = "3";

// listItem.appendChild(p3);

// const childLength = document.querySelector("#childLength");
// childLength.innerHTML = listItem.childElementCount;
// childLength.className = ".";

// const boxChildren = listItem.children;
// console.log(boxChildren);

// const child2 = boxChildren[1];
// child2.innerHTML = "2. number of two, change by DOM Nav";

// const parentOfChild2 = child2.parentElement;
// parentOfChild2.style.backgroundColor = "green";

// const title1Value = document.getElementById("title1");
// console.log("title1Value", title1Value.innerText);

// const listItem = document.getElementById("listItem"); // tomato
// const btnHideList = document.getElementById("btn-hide");
// const btnShowList = document.getElementById("btn-show");

// // event handling
// btnHideList.addEventListener("click", (event) => {
//   listItem.className = "hide";
// });

// btnShowList.addEventListener("click", (event) => {
//   listItem.classList.remove("hide");
// });

// document.addEventListener("DOMContentLoaded", () => {
const input = document.getElementById("title");
const listItems = document.getElementById("listItems");
const errorMsg = document.querySelector(".error");
const form = document.querySelector("form");

const todos = localStorage.getItem("todos");

let tasks = todos ? JSON.parse(window.atob(todos)) : [];
renderTasks();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function renderTasks() {
  if (!tasks.length) {
    const li = document.createElement("li");
    li.innerText = `there's no task.`;
    li.classList.add("no-task");
    listItems.appendChild(li);
    return;
  }

  listItems.innerHTML = "";
  tasks.forEach((task) => {
    input.classList.remove("input-error");
    errorMsg.innerHTML = "";
    const li = document.createElement("li");
    li.innerText = `${task}`;

    li.style.color = "blue";
    listItems.appendChild(li);
  });
}

function addTask() {
  // is empty or not?
  if (input.value == "") {
    errorMsg.innerHTML = "input must be filled";
    errorMsg.style.color = "red";
    input.classList.add("input-error");
    return;
  } else if (!isNaN(input.value)) {
    errorMsg.innerHTML = "input can not number only!";
    errorMsg.style.color = "red";
    input.classList.add("input-error");
    return;
  }

  tasks.push(input.value);
  const decode = JSON.stringify(tasks);
  const decript = window.btoa(decode);

  localStorage.setItem("todos", decript);

  input.value = "";
  renderTasks();
}

function clearAllTask() {
  listItems.innerHTML = "";
  tasks = [];
  localStorage.removeItem("todos");
  renderTasks();
}
