Write the function calcWordFrequencies() that has a single words parameter. calcWordFrequencies() is called with a string argument containing a list of words separated by spaces. The function should output those words and their frequencies to the console.

Ex: If the function call is:

calcWordFrequencies("hey hi Mark hi mark");

then the console output is:

hey 1
hi 2
Mark 1
mark 1

Hint: First use the string method split() that splits a string into an array using a delimiter. Ex: words.split(" ") returns an array containing each word in words. Then place unique words in a map, where the key is the word and the associated value is the word's frequency.

