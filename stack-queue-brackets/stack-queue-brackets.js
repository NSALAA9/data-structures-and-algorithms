function validateBrackets(string) {
  const stack = []; // Stack to store opening brackets

  // Mapping of opening brackets to their corresponding closing brackets
  const bracketMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char); // Push opening brackets to the stack
    } else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
        return false; // Unmatched closing bracket or stack is empty
      }
      stack.pop(); // Matched closing bracket, pop from stack
    }
  }

  return stack.length === 0; // If stack is empty, all brackets are balanced
}

// Example usage:
console.log(validateBrackets('{}')); // true
console.log(validateBrackets('{}(){}')); // true
console.log(validateBrackets('()[[Extra Characters]]')); // true
console.log(validateBrackets('(){}[[]]')); // true
console.log(validateBrackets('{}{Code}[Fellows](())')); // true
console.log(validateBrackets('[({}]')); // false
console.log(validateBrackets('(](')); // false
console.log(validateBrackets('{(})')); // false
