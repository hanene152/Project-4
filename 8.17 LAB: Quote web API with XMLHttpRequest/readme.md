Overview
In this lab, you will use a web API to fetch and display quotes on a selected topic, as shown below.

Famous Quotes web page showing a drop-down list with 'humor' selected, a drop-down list with '3' selected, a Fetch Quotes button, and a numbered list of 3 quotes underneath

Quote web API
A quote web API returns a collection of randomly selected quotes related to a given topic. The API supports two query string parameters:

topic - Specifies the requested topic. Valid topics are love, motivational, wisdom, and humor.
count - Specifies the number of quotes requested and must be a number from 1 to 5.
Ex: The API request:

https://wp.zybooks.com/quotes.php?topic=love&count=3

returns 3 quotes about love, formatted in JSON:

[
   {
      "quote": "If I know what love is, it is because of you.",
      "source": "Hermann Hesse"
   },
   {
      "quote": "The opposite of love is not hate, it's indifference.",
      "source": "Elie Wiesel"
   },
   {
      "quote": "Suffering passes, while love is eternal.",
      "source": "Laura Ingalls Wilder"
   }
]

If the topic is not given or not recognized, the API returns an error message.

Ex: The request for a "success" quote:

https://wp.zybooks.com/quotes.php?topic=success&count=1

returns:

{
   "error": "Topic 'success' not found"
}
Step 1: Fetch the quotes
The fetchQuotes() function in quote.js is called with the selected topic and count when the Fetch Quotes button is clicked. Currently, fetchQuotes() calls showAnonymousQuotes() to display example quotes in an ordered list.

Modify fetchQuotes() to use the XMLHttpRequest object to request quotes from the quote web API. Set the XMLHttpRequest's responseType to expect a JSON response. Register responseReceivedHandler() as the XMLHttpRequest's load event handler.

Step 2: Display the quotes
Implement responseReceivedHandler() to extract the quotes from the XMLHttpRequest response and display the quotes in an ordered list. Each quote should be followed by a space, a dash, a space, and the source. You may find it helpful to repurpose the code in showAnonymousQuotes() to create the quote list.

Ex: If the user chooses "love" and "3" and clicks Fetch Quotes, responseReceivedHandler() should place the returned quotes in an ordered list inside the <div>:

<div id="quotes">
   <ol>
      <li>If I know what love is, it is because of you. - Hermann Hesse</li>
      <li>The opposite of love is not hate, it's indifference. - Elie Wiesel</li>
      <li>Suffering passes, while love is eternal. - Laura Ingalls Wilder</li>
   </ol>
</div>

If an error message is received, the error message should be displayed in the <div>. Ex:

<div id="quotes">
   Topic 'success' not found
</div>
