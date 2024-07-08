window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
   const cInput = document.getElementById("cInput");
   const fInput = document.getElementById("fInput");
   const convertButton = document.getElementById("convertButton");
   const errorMessage = document.getElementById("errorMessage");

   function updateImage(tempF) {
      const weatherImage = document.getElementById("weatherImage");
      if (tempF < 32) {
         weatherImage.src = "cold.png";
      } else if (tempF >= 32 && tempF <= 50) {
         weatherImage.src = "cool.png";
      } else {
         weatherImage.src = "warm.png";
      }
   }

   convertButton.addEventListener("click", () => {
      const celsiusValue = cInput.value;
      const fahrenheitValue = fInput.value;

      if (celsiusValue !== "" && fahrenheitValue !== "") {
         errorMessage.textContent = "Please enter a value in only one field.";
         return;
      }

      if (celsiusValue !== "") {
         const celsius = parseFloat(celsiusValue);
         if (isNaN(celsius)) {
            errorMessage.textContent = `${celsiusValue} is not a number`;
            return;
         }
         const fahrenheit = convertCtoF(celsius);
         fInput.value = Math.round(fahrenheit);
         updateImage(fahrenheit);
         errorMessage.textContent = "";
      } else if (fahrenheitValue !== "") {
         const fahrenheit = parseFloat(fahrenheitValue);
         if (isNaN(fahrenheit)) {
            errorMessage.textContent = `${fahrenheitValue} is not a number`;
            return;
         }
         const celsius = convertFtoC(fahrenheit);
         cInput.value = Math.round(celsius);
         updateImage(fahrenheit);
         errorMessage.textContent = "";
      } else {
         errorMessage.textContent = "Please enter a value in one of the fields.";
      }
   });
   cInput.addEventListener("input", () => {
      fInput.value = "";
      errorMessage.textContent = "";
   });

   fInput.addEventListener("input", () => {
      cInput.value = "";
      errorMessage.textContent = "";
   });
}
function convertCtoF(degreesCelsius) {
   return degreesCelsius * 9 / 5 + 32;
}
function convertFtoC(degreesFahrenheit) {
   return (degreesFahrenheit - 32) * 5 / 9;
}
