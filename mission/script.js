let taskItems = [];
const form = document.getElementById("task-form");

const today = new Date();
today.setHours(0, 0, 0, 0);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title");
  const priority = document.getElementById("priority");
  const duedate = document.getElementById("duedate");

  taskItems.push({
    _id: generateUniqueId(),
    title: title.value,
    priority: priority.value,
    isDone: false,
    duedate: duedate.value == "" ? today : new Date(duedate.value),
    isOverDue: false,
  });

  form.reset();
  renderTasks();
});

function generateUniqueId() {
  return Math.random().toString(36).substring(2, 15);
}

const emptyTask = `
    <div class="card empty-card">
      <div class="content-card">
        <h4 class="text-base">There's no task.</h4>
      </div>
    </div>`;

renderTasks();

function renderTasks() {
  taskItems = taskItems.reverse();
  const listItemTodo = document.querySelector("#todoItems .list-item");
  const listItemDone = document.querySelector("#doneItems .list-item");
  const listItemOverDue = document.querySelector("#overDueItems .list-item");

  const dones = taskItems.filter((el) => el.isDone);
  const overDues = taskItems
    .filter((el) => {
      return !el.isDone && el.duedate && new Date(el.duedate) < today;
    })
    .map((el) => {
      return { ...el, isOverDue: true };
    });
  const todos = taskItems.filter((el) => {
    const isOverdue = el.duedate && new Date(el.duedate) < today;
    return !el.isDone && !isOverdue;
  });

  listItemTodo.innerHTML = todos.length === 0 ? emptyTask : "";
  listItemDone.innerHTML = dones.length === 0 ? emptyTask : "";
  listItemOverDue.innerHTML = overDues.length === 0 ? emptyTask : "";

  todos.forEach((task) => {
    const card = createCardElement(task);
    listItemTodo.appendChild(card);
  });

  dones.forEach((task) => {
    const card = createCardElement(task);
    listItemDone.appendChild(card);
  });

  overDues.forEach((task) => {
    const card = createCardElement(task);
    listItemOverDue.appendChild(card);
  });
}

function createCardElement(task) {
  const isDone = task.isDone;
  const isOverDue = task.isOverDue;
  const dueDate = new Date(task.duedate).toDateString();

  const card = document.createElement("div");
  card.className = `card ${isOverDue ? "card-overdue" : ""}`;
  card.innerHTML = `
            <input type="checkbox" class="todo-checkbox" ${isOverDue ? "disabled" : ""} id="${task._id}" ${isDone ? "checked" : ""} onchange="toggleDone('${task._id}')"/>

            <div class="content-card">
              <div style="display: flex; justify-content: space-between">
                <div class="priority priority-${task.priority}">${task.priority == "medium" ? "Medium" : task.priority == "low" ? "Low" : "High"}</div>

                ${
                  !isOverDue
                    ? `<button class="btn-close" onclick="deleteTask('${task._id}')">
                  <i
                    class="fa fa-trash-o"
                    style="font-size: 14px; color: var(--red)"
                  ></i>
                </button>`
                    : ""
                }
              </div>
              <p class="text-base font-deadline">${dueDate}</p>
              <p class="text-base">${task.title}</p>
            </div>`;

  return card;
}

function deleteAllTasks() {
  const confirm = window.confirm("All task will be deleted. Are you sure?");

  if (confirm) {
    taskItems = [];
    renderTasks();
  }
}

function deleteTask(taskId) {
  const deleteConfirm = confirm("Are you sure you want to delete this task?");

  if (deleteConfirm) {
    const filterredItems = taskItems.filter((el) => el._id != taskId);
    taskItems = filterredItems;
    renderTasks();
  } else {
    return;
  }
}

function toggleDone(taskId) {
  taskItems = taskItems.map((el) => {
    if (el.isOverDue) return el;
    if (el._id == taskId) {
      return { ...el, isDone: !el.isDone };
    }

    return el;
  });
  renderTasks();
}
