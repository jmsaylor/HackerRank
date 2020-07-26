const addZero = () => {
  let display = document.getElementById("res");
  display.innerHTML += "0";
};

const addOne = () => {
  let display = document.getElementById("res");
  display.innerHTML += "1";
};

const addPlus = () => {
  let display = document.getElementById("res");
  display.innerHTML += "+";
};

const addMinus = () => {
  let display = document.getElementById("res");
  display.innerHTML += "-";
};

const addMultiply = () => {
  let display = document.getElementById("res");
  display.innerHTML += "*";
};

const addDivide = () => {
  let display = document.getElementById("res");
  display.innerHTML += "/";
};

const clearRes = () => {
  let display = document.getElementById("res");
  display.innerHTML = "";
};

const processEquation = () => {
  let display = document.getElementById("res");
  const string = display.innerHTML;
  let index = "";

  if (string.indexOf("+") > 0) {
    index = string.indexOf("+");
  } else if (string.indexOf("-") > 0) {
    index = string.indexOf("-");
  } else if (string.indexOf("*") > 0) {
    index = string.indexOf("*");
  } else if (string.indexOf("/") > 0) {
    index = string.indexOf("/");
  }

  //   console.log();

  const equation = {
    operands: [string.substr(0, index), string.substr(index + 1)],
    operation: string.substr(index, 1),
  };

  console.log(equation);

  let answer = "";

  const { operands, operation } = equation;

  switch (operation) {
    case "+":
      answer = parseInt(operands[0], 2) + parseInt(operands[1], 2);
      break;
    case "-":
      answer = parseInt(operands[0], 2) - parseInt(operands[1], 2);
      break;
    case "*":
      answer = parseInt(operands[0], 2) * parseInt(operands[1], 2);
      break;
    case "/":
      answer = parseInt(operands[0], 2) / parseInt(operands[1], 2);
      break;
    default:
      answer = "buckus";
  }

  console.log(answer);
  display.innerHTML = answer.toString(2);
};
