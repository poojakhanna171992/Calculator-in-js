const inputBox = document.getElementById("inputBox");

//getting value
function appendValue(value) {
  inputBox.value += value;
}
//clear the display.
function clearDisplay() {
  inputBox.value = "";
}
//delete the value.
function deleteLast() {
  inputBox.value = inputBox.value.slice(0, -1);
}
//getting result
function calculateResult() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch {
    inputBox.value = "Error";
  }
}
// finding square root.
function squareRoot() {
  try {
    inputBox.value = Math.sqrt(eval(inputBox.value));
  } catch (err) {
    inputBox.value = "Error";
  }
}

//finding percentage
function percentage() {
  try {
    inputBox.value = eval(inputBox.value) / 100;
  } catch (err) {
    inputBox.value = "Error";
  }
}
//calculate the power result.
function calculateResult() {
  try {
    if (inputBox.value.includes("^")) {
      const parts = inputBox.value.split("^");
      const base = eval(parts[0]);
      const exponent = eval(parts[1]);
      inputBox.value = Math.pow(base, exponent);
    } else {
      inputBox.value = eval(inputBox.value);
    }
  } catch (err) {
    inputBox.value = "Error";
  }
}
//finding square.
function square() {
  try {
    const value = eval(inputBox.value);
    inputBox.value = Math.pow(value, 2);
  } catch (err) {
    inputBox.value = "Error";
  }
}
//finding cube.
function cube() {
  try {
    const value = eval(inputBox.value);
    inputBox.value = Math.pow(value, 3);
  } catch (err) {
    inputBox.value = "Error";
  }
}
