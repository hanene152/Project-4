Overview
In this lab, you will implement a temperature converter in JavaScript. The user may type a temperature in either the Celsius or Fahrenheit textbox and press Convert to convert the temperature. An image displays based on the converted temperature.

Screenshot showing 12 in Celsius textbox, 53.6 in Fahrenheit textbox, and picture of the sun.

Step 1: Inspect the project
The project contains HTML, CSS, and JavaScript files. Three image files are in the images folder. The HTML file declares five UI elements that the JavaScript will interact with:

Element's ID	Element description
cInput	Text input field for Celsius temperature
fInput	Text input field for Fahrenheit temperature
convertButton	Button that, when clicked, converts from one temperature to the other
errorMessage	Paragraph for displaying an error message when temperature cannot be converted
weatherImage	Image corresponding to the temperature
Step 2: Implement conversion functions (2 points)
Implement the convertCtoF() and convertFtoC() functions in convert.js to convert between Celsius and Fahrenheit. convertCtoF() takes a single numerical argument for a temperature in Celsius and returns the temperature in Fahrenheit using the following conversion formula:

°F = °C * 9/5 + 32

Similarly, convertFtoC() takes a single numerical argument for a temperature in Fahrenheit and returns the temperature in Celsius using the following conversion formula:

°C = (°F - 32) * 5/9
Step 3: Register Convert button's click event handler (2 points)
When the DOM finishes loading, the domLoaded() function is called. In domLoaded(), call addEventListener() to register a click event handler for the Convert button (id="convertButton").

When the Convert button is clicked, the text box that contains a number should be converted into the opposing temperature. So if a number is in the Celsius text box (id="cInput"), the click event handler should convert the number into Fahrenheit and display the result in the Fahrenheit text box (id="fInput") and vice versa. Use parseFloat() to convert a string to a number, and do not round the result.

Step 4: Ensure only one text field contains a value (2 points)
Ensure that only one text field contains a value at any moment in time unless the Convert button has been clicked. Ex: When the Celsius field has a number and the user enters a Fahrenheit entry, the Celsius field should be cleared as soon as the user begins to type. 

Implement an input event handler for each of the text fields that clears the opposing text field when the input changes. Call addEventListener() to register each input event handler in the domLoaded() function.

Step 5: Change image to reflect temperature (2 points)
When the temperature is converted, change the image to reflect the temperature in Fahrenheit, as indicated in the table below. To change the image, change the image's src property to the appropriate filename.

Below 32 °F	32 - 50 °F	Above 50 °F
snowflake	storm cloud	sun
cold.png	cool.png	warm.png
Step 6: Handle bad input (2 points)
When parseFloat() returns NaN for the temperature to be converted, set errorMessage's textContent to the message: "X is not a number", where X is the string from the text input. When parseFloat() returns a valid number, set errorMessage's textContent to an empty string. The image below shows a sample error message.

