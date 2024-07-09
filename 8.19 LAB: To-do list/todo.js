window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const addButton = document.querySelector("#addBtn");
   const taskInput = document.querySelector("#taskInput");

   if (addButton && taskInput) {
      addButton.addEventListener("click", addBtnClick);
      taskInput.addEventListener("keyup", function (event) {
         if (event.key === "Enter") {
            addBtnClick();
         }
      });
   } else {
      console.error("DOM elements not found");
   }
}

function addBtnClick() {
   const taskInput = document.querySelector("#taskInput");
   if (!taskInput) {
      console.error("Task input element not found");
      return;
   }
   const taskText = taskInput.value.trim();

   if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
      taskInput.focus();
   }
}

function addTask(task) {
   const ol = document.querySelector("#taskList");
   if (!ol) {
      console.error("Task list element not found");
      return;
   }
   const li = document.createElement("li");
   li.innerHTML = `<span class="task-text">${task}</span><button class="done-btn">&#10006;</button>`;
   ol.appendChild(li);

   const lastButton = li.querySelector(".done-btn");
   if (lastButton) {
      lastButton.addEventListener("click", removeTask);
   } else {
      console.error("Done button not found");
   }
}

function removeTask(event) {
   const button = event.target;
   const li = button.parentNode;
   const ol = li.parentNode;
   if (ol) {
      ol.removeChild(li);
   } else {
      console.error("Ordered list parent element not found");
   }
}
