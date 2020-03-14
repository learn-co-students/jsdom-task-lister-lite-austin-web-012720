document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');

  let enteredText = document.getElementById('new-task-description');
  
  const tasks = document.getElementById('tasks');
 

  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    let li = document.createElement('li');
    //line 14 is exactly the same as line 15, one if just using the event.target and the other caputure the value directly
    //li.innerText = event.target.children[1].value;
    li.innerText = enteredText.value 
    tasks.appendChild(li);
    enteredText.value = "";

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('class','delete');
    deleteButton.innerText = ' x ';

    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", (event) => {
      let ul = li.parentNode;
      ul.removeChild(li);
    });

  });

});









