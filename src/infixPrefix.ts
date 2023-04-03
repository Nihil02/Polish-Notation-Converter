import { clearInput, isEmpty, operand, pemdas } from "./util";

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
  let stack: string[] = [];

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
        !isEmpty(stack) &&
        pemdas(value) < pemdas(stack[stack.length - 1])
      ) {
        res += stack.pop();
      }
      stack.push(value);
    }
  }

  while (!isEmpty(stack)) {
    res += stack.pop();
  }

  return revStr(res);
}

export default infixPrefix;
