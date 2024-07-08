function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   const distributionArray = [0, 0, 0, 0, 0];
   scoresArray.forEach(score => {
      const numScore = parseInt(score, 10);
      if (numScore >= 90) {
         distributionArray[0]++;
      } else if (numScore >= 80) {
         distributionArray[1]++;
      } else if (numScore >= 70) {
         distributionArray[2]++;
      } else if (numScore >= 60) {
         distributionArray[3]++;
      } else {
         distributionArray[4]++;
      }
   });
   return distributionArray;
}
function setTableContent(userInput) {
   const scoresArray = parseScores(userInput);
   const distributionArray = buildDistributionArray(scoresArray);
   const firstRow = document.getElementById("first-row");
   const thirdRow = document.getElementById("third-row");
   firstRow.innerHTML = '';
   thirdRow.innerHTML = '';
   distributionArray.forEach((count, index) => {
      const barDiv = `<div style="height:${count * 10}px" class="bar${index}"></div>`;
      firstRow.innerHTML += `<td>${barDiv}</td>`;
      thirdRow.innerHTML += `<td>${count}</td>`;
   });
}

// TODO: Change the arguments for testing purposes
setTableContent("45 78 98 83 86 99 90 59");