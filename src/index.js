document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// const input = document.getElementById("new-task-description");
// const tasks = document.getElementById("tasks")
// console.log(input);
// function logSubmit(event){
//     event.preventDefault();
//     console.log("Form Submitted!")
//     console.log(tasks)
// }
// document.addEventListener("submit", () => {
//     console.log("The event has been submitted!")
//     const submit = document.getElementById("new-task-description").value;
//     //submit.textContent =  `Task Added! Time stamp: ${event.timeStamp}`;
//     console.log(`Submit: ${submit}`)
// })

// const form = document.getElementById("create-task-form");
// // const log = document.getElementById("")
// form.addEventListener('submit', logSubmit)

const input = document.getElementById("new-task-description").value;
const taskList = document.getElementById("tasks");
const taskWriter = document.getElementById("create-task-form");




const createNewTask = (event) => {
  event.preventDefault();
  const taskWriter = document.getElementById("new-task-description").value;
  // const newTask = document.createElement("li");
  console.log(`taskWrite: ${taskWriter}`);
  // newTask.innerText = taskWriter; 

  taskList.innerHTML += `
  <li>${taskWriter}</li>
  <button data-action='delete'>X</button>`;
  event.target.reset();

}

taskList.addEventListener("click", function(e){
  if (e.target.action === 'delete');
    e.target.parentElement.remove();

})

taskWriter.addEventListener("submit", createNewTask);


});
