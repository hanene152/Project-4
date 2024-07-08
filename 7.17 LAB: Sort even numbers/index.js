function sortEvens(numArray) {
   let evensArray = [];
   for (let i = 0; i < numArray.length; i++) {
      if (numArray[i] % 2 === 0) {
         evensArray.push(numArray[i]);
      }
   }
   evensArray.sort((a, b) => a - b);
   return evensArray;
}

console.log("Testing sortEvens()...");
let nums = [4, 2, 9, 1, 8];
let evenNums = sortEvens(nums);
console.log(evenNums);


// Do NOT remove the following line:
export default sortEvens;