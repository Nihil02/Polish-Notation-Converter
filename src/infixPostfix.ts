const operand: RegExp = /^\d*^\w*$/;

function pemdas(op: string) {
  switch (op) {
    case "^":
      return 3;
    case "*":
    case "/":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return 0;
  }
}

function infixPostfix(expression: string) {
  let res: string = "";
  let stack = [];

  for (let i = 0; i < expression.length; i++) {
    let value = expression[i];

    if (operand.test(value)) {
      res += value;
    } else if (value == "(") {
      stack.push(value);
    } else if (value == ")") {
      while (stack[stack.length - 1] != "(") {
        res += stack.pop();
      }
      stack.pop();
    } else {
      while (stack.length != 0 && pemdas(value) <= pemdas(stack[stack.length - 1])) {
        res += stack.pop();
      }
      stack.push(value);
    }
  }

  while (stack.length != 0) {
    res += stack.pop();
  }

  return res;
}

export default infixPostfix;
