function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const taskItem = document.createElement("li");
  taskItem.textContent = taskText;
  taskItem.addEventListener("click", toggleCompleted);

  const deleteButton = document.createElement("span");
  deleteButton.textContent = "X";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", deleteTask);

  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  taskInput.value = ""; // Clear the input field after adding a task
}

function toggleCompleted(event) {
  const taskItem = event.target;
  taskItem.classList.toggle("completed");
}

function deleteTask(event) {
  const taskItem = event.target.parentElement;
  taskItem.remove();
}
