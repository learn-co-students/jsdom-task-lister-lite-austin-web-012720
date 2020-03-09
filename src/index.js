document.addEventListener("DOMContentLoaded", () => {
  const newTeskForm = document.getElementById('create-task-form');
  const newTaskDescription = document.getElementById('new-task-description');
  const newTaskPriority = document.getElementById('new-task-priority');

  const newTask = document.getElementById('tasks');

  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preverntDefault();

  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskEle = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById('tasks').appendChild(task);
};