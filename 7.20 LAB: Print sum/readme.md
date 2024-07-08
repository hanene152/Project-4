Complete the printSum() function in index.js. The function has x and y parameters, which are assigned with strings when printSum() is called. If the strings can be converted into numbers, printSum() should output a message with the numbers' sum to the console.

Ex: printSum("3", "6") outputs the sum of 3 + 6 to the console:

Sum is 9.

If one of the arguments is not a number, then printSum() should output which argument is not a number.

Ex: printSum("hello", "6") outputs:

'hello' is not a number.

If both arguments are not numbers, printSum() should indicate so.

Ex: printSum("hello", "hi") outputs:

'hello' and 'hi' are not numbers.

Hint: Use JavaScript functions isNaN() and parseFloat() in your solution.

index.js is calling printSum() for testing purposes. When the function is implemented, clicking Run should output the appropriate message. 

When you submit your solution for grading, the unit tests will call printSum() with different arguments to verify the function produces the correct output.
