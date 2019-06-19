function balancedParens(str){
  let stack = [];
  let parensBegin = ['(', '{', '[',];
  let parensEnd = {')': '(',
                  '}': '{',
                   ']' : '['};
  for(const char of str){
    if(parensBegin.includes(char)) {
      stack.push(char);
    }
    else if(stack[stack.length - 1] === parensEnd[char]) {
      stack.pop();

    }
  }

  return stack.length === 0;
}