document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById('create-task-form');

  input.addEventListener('submit',submitForm);

  function submitForm(){
    const val = document.getElementById("new-task-description").value;
    const li = document.createElement('li');
    li.innerHTML =  `${val} ` +  '<button id="Delete">Finish Task</button>';
    document.getElementById("create-task-form").reset();
    document.getElementById('tasks').appendChild(li);

    event.preventDefault();

  }
  if document.getElementById('Delete'){
    const del = document.getElementById('Delete')
    del.addEventListener('click',()=>{
      del.parentNode.parentNode.removeChild();
  });
  }
});
