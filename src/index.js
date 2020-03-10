document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const toDoList = [];
  const formText = document.getElementById('create-task-form')
  const submitButton = document.querySelectorAll('input')[1]

  formText.addEventListener('submit', function(event) {
    event.preventDefault();
    addToDo(document.getElementById('new-task-description').value);
    displayToDo();
  });

  function addToDo(toDo){
    toDoList.push(toDo);
  }

  function displayToDo(){
    list = document.getElementById('tasks');
    list.innerHTML = '';
    for (let i = 0; i < toDoList.length; i++){
      let toDoItem = document.createElement('li');
      toDoItem.innerText = toDoList[toDoList.length - 1 - i];
      list.appendChild(toDoItem);
    }

  }
});
