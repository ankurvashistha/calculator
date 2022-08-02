let screen = document.getElementById("screen"); //to get the element from html
let buttons = document.querySelectorAll("button"); //queryselector for buttons
let screenValue = ""; // value of screen currently empty

for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue; // here .value is inbuilt function object used to extract value of screen
    } else if (buttonText == "C") {
      //to clear the result screen
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "=") {
      //equals to function
      screen.value = eval(screenValue); // eval() inbuilt object function
    } else if (buttonText == "B") {
      //backspace function case
      screenValue = screenValue.slice(0, -1); //slice inbuilt function used to delete number one by one from last. It slices the value one by one from the end.
      screen.value = screenValue;
    } else {
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}
