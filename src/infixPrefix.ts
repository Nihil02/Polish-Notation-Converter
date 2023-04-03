import { clearInput, operand, pemdas } from "./util";

function revStr(str: string) {
  return str.split("").reverse().join("");
}

function infixPrefix(expression: string) {
  expression = clearInput(expression);
  expression = revStr(expression);
  expression = expression
    .replaceAll(")", "***")
    .replaceAll("(", ")")
    .replaceAll("***", "(");

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
      while (
        stack.length != 0 &&
        pemdas(value) < pemdas(stack[stack.length - 1])
      ) {
        res += stack.pop();
      }
      stack.push(value);
    }
  }

  while (stack.length != 0) {
    res += stack.pop();
  }

  return revStr(res);
}

export default infixPrefix;
