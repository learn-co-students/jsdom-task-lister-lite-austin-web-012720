document.addEventListener('DOMContentLoaded', () => {

const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');
let newTask = document.getElementById('new-task-description');

taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  

  let li = document.createElement('li');
  li.innerText = newTask.value;
  //console.log(il)
  taskList.appendChild(li);
  //console.log(taskList)
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerText = 'Delete this now';
  li.appendChild(deleteButton);
  
  deleteButton.addEventListener('click', () => li.remove());
  
  taskForm.reset();
  });

});