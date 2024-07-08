Overview
In this lab, you will write three JavaScript functions to generate a bar graph of letter grades from a distribution of scores, as shown in the image below.

Bar graph showing 3 As, 2 Bs, 1 C, no Ds, and 2 Fs.

Step 1: Inspect the project
The lab consists of an HTML, a CSS, and a JavaScript file:

index.html imports the styles.css and index.js files. The file contains a single table with three rows. The first and third rows are empty. 
styles.css declares classes for coloring the bars in the table's first row and other CSS for altering the table's appearance.
index.js declares three functions to be implemented, which will together generate the HTML for the table's first and third rows.
Step 2: Implement parseScores() (1 point)
Implement the parseScores() function to take a space-separated string of scores as an argument and return an array of score strings. Each score is a number in the range [0, 100].

Ex: parseScores("45 78 98 83 86 99 90 59") should return ["45", "78", "98", "83", "86", "99", "90", "59"].

Hint: The string method split() can create the array with one line of code.

Step 3: Implement buildDistributionArray() (2 points)
Implement the buildDistributionArray() function to take an array of scores, built by parseScores(), as an argument. The function should return a grade distribution array of length 5.

The function should loop through the scores array and tally up the number of A, B, C, D, and F scores using the standard scoring system (90 and above = A, 80-89 = B, 70-79 = C, 60-69 = D, 59 and below = F). The grade totals should be stored in a distribution array where the number of As is the first number, number of Bs is the second number, etc.

Ex: buildDistributionArray(["45", "78", "98", "83", "86", "99", "90", "59"]) should return [3, 2, 1, 0, 2].

buildDistributionArray() should return [0, 0, 0, 0, 0] when the scoresArray argument is an empty array.

Step 4: Implement setTableContent() (7 points)
Implement the setTableContent() function to take a space-separated string of scores as an argument. setTableContent() should call parseScores() and buildDistributionArray() and produce a grade distribution graph by setting the table row's inner HTML.

The table's first row (id="first-row") should use a <div> for each bar. Each bar gains 10 pixels in height per grade occurrence. Ex: If 3 As exist in the distribution array, then the A bar's <div> height should be 3 * 10px = 30px.

Apply the classes from the CSS stylesheet so that each bar is a different color. The CSS vertical-align property is set for <td> elements so that the bars are aligned at the bottom of the containing cells.

Below is a sample of what might be generated for the table's first row.

<tr id="first-row">
   <td><div style="height:30px" class="bar0"></div></td>
   <td><div style="height:20px" class="bar1"></div></td>
   <td><div style="height:10px" class="bar2"></div></td>
   <td><div style="height:0px"  class="bar3"></div></td>
   <td><div style="height:20px" class="bar4"></div></td>
</tr>

The table's second row contains letter grade labels.

The third row (id="third-row") should contain the number of occurrences of each grade.

Ex: setTableContent("45 78 98 83 86 99 90 59") should produce the following table:



Testing your solution
The given index.js file calls setTableContent() with several different scores. Replace the scores string with other scores to verify the webpage produces a table with the correct bar graph and distributions. Then submit your solution for grading.
