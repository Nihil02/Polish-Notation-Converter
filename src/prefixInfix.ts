import { operand } from "./util";

function prefixInfix(exp: string) {
  let stack: string[] = [];
  const expression = exp.split(" ");

  for (let i = expression.length - 1; i >= 0; i--) {
    const value = expression[i];

    if (operand.test(value)) {
      stack.push(value);
    } else {
      const op2 = stack.pop();
      const op1 = stack.pop();
      const aux = "(" + op2 + value + op1 + ")";
      stack.push(aux);
    }
  }
  return stack.pop()!.slice(1, -1);
}

export default prefixInfix;
