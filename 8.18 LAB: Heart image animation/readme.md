
Overview
In this lab, you will use a JavaScript timer to animate the movement of a heart image to the location where the mouse clicks, as shown below.

Web page shows a heart with an arrow pointing to where the user is clicking

Step 1: Inspect the project
The project contains HTML, image, and JavaScript files. The index.html file displays a webpage with the heart image. The <img> tag's inline style is using absolute positioning to display the heart 50px from the browser's left edge and 50px from the browser's top edge.

When the user clicks anywhere in the page, the startAnimation() function is called. startAnimation() determines where the user clicked and calls moveImage() with the clicked (x, y) coordinate. moveImage() moves the heart 1 pixel in the direction of the given (x, y) coordinates by modifying the image's inline style.

Step 2: Add animation
Make the following JavaScript modifications using clearInterval() and setInterval() where appropriate:

In startAnimation(), add an if statement that stops the timer with the ID timerId if timerId is not null.

After the if statement in startAnimation() that stops the timer, start a timer that calls moveImage(clickX, clickY) every 10 milliseconds. Save the timer ID in the timerId variable.

Add an if statement in moveImage() that stops the timer with the ID timerId if (imgX, imgY) is equal to (centerX, centerY). Also set timerId to null.

After the modifications are complete, the user should be able to click anywhere in the browser, and the heart will move to the clicked location. If the user clicks on a new location before the heart arrives at the last location, the heart will adjust course and move to the new location.
