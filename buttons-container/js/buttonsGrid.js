function shiftNumbers() {
  //skips 5
  let buttons = [
    "btn1",
    "btn2",
    "btn3",
    "btn6",
    "btn9",
    "btn8",
    "btn7",
    "btn4",
  ];

  let numbers = [];

  buttons.forEach((id) => {
    const button = document.getElementById(id);
    numbers.push(button.innerHTML);
  });

  let splice = numbers.splice(-1);
  numbers.unshift(splice[0]);

  for (let x = 0; x < buttons.length; x++) {
    const button = document.getElementById(buttons[x]);
    button.innerHTML = numbers[x];
  }
}
