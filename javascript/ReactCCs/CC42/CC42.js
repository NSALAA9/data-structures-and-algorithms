
function reverseString(inputString) {
  let reversedStr = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedStr += inputString[i];
  }
  return reversedStr;
}
  
module.exports = reverseString;
  
// Example usage
const inputStr1 = "Code Fellows";
const inputStr2 = "Tacocat";
const inputStr3 = "A ship in port is safe, but that's not what ships are built for.";

const output1 = reverseString(inputStr1);
const output2 = reverseString(inputStr2);
const output3 = reverseString(inputStr3);

console.log(output1);  // Output: "swolleF edoC"
console.log(output2);  // Output: "tacocaT"
console.log(output3);  // Output: ".rof tliub era spihs tahw ton s'taht tub ,efas si trop ni pihs A"
