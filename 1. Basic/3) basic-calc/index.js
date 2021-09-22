function basicCalc(operation, a, b) {
  switch (operation) {
      case "+" : return a + b;
      case "-": return a - b;
      case "/": return a / b;
      case "*": return a * b;
  }
}

window.basicCalc = basicCalc;

export default basicCalc;
