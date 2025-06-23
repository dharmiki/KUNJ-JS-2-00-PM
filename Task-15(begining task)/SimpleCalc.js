function calculator(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Divide by zero';
    default: return 'Invalid operator';
  }
}
console.log(calculator(10, 5, '*'));
