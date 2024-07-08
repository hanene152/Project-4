window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function showAnonymousQuotes(count) {
   let html = "<ol>";
   for (let c = 1; c <= count; c++) {
      html += `<li>Quote ${c} - Anonymous</li>`;
   }
   html += "</ol>";

   document.querySelector("#quotes").innerHTML = html;
}

function fetchQuotes(topic, count) {
   const xhr = new XMLHttpRequest();
   xhr.responseType = "json";
   xhr.addEventListener("load", responseReceivedHandler);
   xhr.open("GET", `https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`);
   xhr.send();
   showAnonymousQuotes(count);
}

function responseReceivedHandler() {
   const quotesDiv = document.querySelector("#quotes");
   const response = this.response;

   if (response.error) {
      quotesDiv.innerHTML = response.error;
   } else {
      let html = "<ol>";
      for (let quote of response) {
         html += `<li>${quote.quote} - ${quote.source}</li>`;
      }
      html += "</ol>";

      quotesDiv.innerHTML = html;
   }

}