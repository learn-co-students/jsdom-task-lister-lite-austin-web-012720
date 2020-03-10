document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');
  const enteredText = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');
  // let deletButton = document.getElementsByClassName('delete');

  taskForm.addEventListener('submit', function(event){
    event.preventDefault();
  
    let li = document.createElement('li');
    li.innerText = enteredText.value 
    tasks.appendChild(li);

    // let deleteButton = document.createElement('button');
    // deleteButton.className = 'delete';
    // deleteButton.innerText = 'x';

    // li.appendChild(deleteButton);
  })

  // deleteButton.addEventListener('click', function(){
    
  // })
});








