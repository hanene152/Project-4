Complete the isStrongPassword() function that has a single password parameter. The function should return true only if all the following conditions are true:

The password is at least 8 characters long.
The password does not contain the string "password".
The password contains at least one uppercase character.
The password contains at least one number.
The password contains at least one special character.
The password contains repeat character or number sequences (such as "1111" or "bbbb") of a length four or less.
If any of the above conditions are false, isStrongPassword() should return false.


Hint: A regular expression can help in completing many of these bullet points. Refer to the following documentation:

https://www.w3schools.com/js/js_regexp.asp


Quick Introduction: https://www.youtube.com/watch?v=sXQxhojSdZM

Longer Introduction: https://www.youtube.com/watch?v=es0k3mymXWw



Below are example calls to isStrongPassword():

isStrongPassword("Qwerty");         // false - Too short
isStrongPassword("passwordQwerty")  // false - Contains "password"
isStrongPassword("qwerty123")       // false - No uppercase characters
isStrongPassword("Qwerty123")       // true

index.js is calling isStrongPassword() with the arguments above for testing purposes. Call isStrongPassword() with other arguments to further test your function.
