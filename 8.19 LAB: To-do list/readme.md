Overview
In this lab, you will implement a "to-do" list in JavaScript. The user can type a task into the text box and click Add to add the task to the task list. Clicking a task's ✖ button removes the task from the list.

To-Do List heading with textbox and Add button and list: 1. Clean bathroom, 2. Study for big exam, 3. Feed fish.

Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files:

index.html contains the "New task:" label, a textbox for entering a new task, an Add button, and an empty ordered list. 
styles.css adds styling to the webpage. 
todo.js contains four functions that need implementing.
Step 2: Add new task (4 points)
To add a new task, make the following modifications:

In domLoaded(), register addBtnClick() as the Add button's click event handler.

In addBtnClick(), extract the text entered in the textbox, then call addTask() with the new task.

In addTask():

Call document.createElement() to create a new <li> element. 
Set the new <li> element's innerHTML to the following string where NEW TASK is the addTask() parameter:
<span class="task-text">NEW TASK</span><button class="done-btn">&#10006;</button>
Call document.querySelector() to find the <ol> DOM node.
Call appendChild() on the <ol> DOM node with the new <li> element to append the <li> to the ordered list.
When the above modifications are implemented, the user should be able to type a new task, click Add, and see the new task in the list below. Each additional task added should appear at the end of the list. Clicking the ✖ next to each task should not do anything.

Step 3: Improve task entering (2 points)
The user can enter tasks faster by making three improvements: 1) Clearing a newly added task from the textbox automatically, 2) Putting the focus back on the textbox after clicking Add, and 3) Allowing the user to hit Enter instead of clicking the Add button.

Make the following modifications:

In domLoaded(), add a keyup event handler for the textbox that has an event parameter.

In the keyup event handler, call addBtnClick() if the event.key is "Enter".

In addBtnClick():

Clear the textbox's value property by assigning an empty string after the call to addTask(). 
Call the textbox method focus() to put the focus back on the textbox.
When the above modifications are implemented, the user should be able to quickly type tasks and press Enter without ever having to click the Add button or manually delete the previously typed task. If the user does click Add, the focus is automatically put back on the textbox so the user doesn't have to click the textbox in order to type the next task.

Step 4: Prevent empty tasks (1 point)
The user can hit Enter or click Add without typing a task, but an empty task should not be added to the list. Add an if statement in addBtnClick() to prevent calling addTask() with an empty string argument.

Step 5: Remove tasks (3 points)
When the user clicks the done button (✖) next to each task, the task should be removed from the list.

Make the following modifications:

In addTask():

After the existing code that appends the new list item, search the DOM for all buttons that use the done-btn class.
Register removeTask() as the last done button's click event handler.

In removeTask():

Use the parentNode property to assign a variable with event.target's parent node (event.target is the done button that was clicked, and the parent is the <li> element that contains the done button).
Call removeChild() on the <ol> element (the <li> element's parent node) to remove the <li> element.
When the above modifications are implemented, clicking on any task's ✖ button will cause the task to immediately disappear.
