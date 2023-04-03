export const operand: RegExp = /^\d*^\w*$/;

export function pemdas(op: string) {
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

export function clearInput(str: string): string {
  str = str.replaceAll("[", "(").replaceAll("{", "(");
  str = str.replaceAll("]", ")").replaceAll("}", ")");
  str = str.replaceAll(" ", "");
  return str;
}

export function isEmpty(arr: string | any[]): boolean {
  if (arr.length == 0) {
    return true;
  }
  return false;
}
