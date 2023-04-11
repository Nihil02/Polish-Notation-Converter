import { operand } from "./util";

function postfixInfix(exp: string) {
  let stack: string[] = [];
  const expression = exp.split(" ");

  for (let i = 0; i < expression.length; i++) {
    const value = expression[i];

    if (operand.test(value)) {
      stack.push(value);
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      const aux = "(" + op1 + value + op2 + ")";
      stack.push(aux);
    }
  }
  return stack.pop().slice(1, -1);
}

export default postfixInfix;
