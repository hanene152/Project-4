Complete the drawTriangle() function in index.js. The function should draw a triangle with asterisks (*) based on the triangleSize parameter.

Ex: drawTriangle(4) outputs to the console a triangle with triangleSize 4, so the longest side (4 asterisks) appears on the bottom line:

*
**
***
****

Hint: Use a loop inside a loop to complete drawTriangle(). The outer loop is responsible for outputting each asterisk line, and the inner loop is responsible for building the asterisk line with the appropriate length by concatenating asterisks to a single string.

index.js is calling drawTriangle(4) for testing purposes. When the function is implemented, clicking Run should output the triangle above. Change the argument to different numbers to verify that your function works with any positive integer. 

When you submit your solution for grading, the unit tests will call drawTriangle() with different arguments to verify the function produces the correct output.
