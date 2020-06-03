function calculator(num1, operator, num2) {
  if(operator === "+") {
    return num1 + num2;
  } else if(operator === "-") {
    return num1 - num2;
  } else if(operator === "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

let calculationAnswer = calculator(1,"*",5);
console.log(calculationAnswer);

