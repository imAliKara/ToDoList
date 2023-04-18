const inputTask = document.getElementById("input-task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskButton.addEventListener("click", addTask);

function addTask() {
  const taskText = inputTask.value;
  if (taskText.trim() === "") {
    alert("Lütfen bir görev girin!");
    return;
  }
  const taskItem = document.createElement("li");
  taskItem.innerHTML = `${taskText}<button class="delete-task">X</button>`;
  taskList.appendChild(taskItem);
  inputTask.value = "";
  const deleteTaskButton = taskItem.querySelector(".delete-task");
  deleteTaskButton.addEventListener("click", deleteTask);
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskList.removeChild(taskItem);
}