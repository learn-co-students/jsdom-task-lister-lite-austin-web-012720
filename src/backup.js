document.addEventListener("DOMContentLoaded", () => {
  

    const taskForm = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
    
    taskForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const taskItem = document.createElement("li");
      const newTask = document.getElementById("new-task-description").value;
      taskItem.innerText = newTask;
      taskList.appendChild(taskItem);
      
      const button = document.createElement("button");
      button.setAttribute('class','delete');
      button.innerText = "X to delete";
      taskItem.appendChild(button);
      
    
      button.addEventListener('click', () => taskItem.remove());
        // taskItem.parentNode.removeChild(taskItem);
        // let ul = taskItem.parentNode;
        //   ul.removeChild(taskItem);
      taskForm.reset(); 
      
    });
    
    // taskList.addEventListener("click", function(e) {
    //   if (e.target..dataset.action === "delete") {
    //     e.target.parentElement.remove();
    //   }
      
    // })
    });
