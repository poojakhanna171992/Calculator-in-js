const inputBox = document.getElementById("inputBox");

function appendValue(value) {
  inputBox.value += value;
}
function clearDisplay() {
  inputBox.value = "";
}
function deleteLast() {
  inputBox.value = inputBox.value.slice(0, -1);
}
function calculateResult() {
  try {
    inputBox.value = eval(inputBox.value);
  } catch {
    inputBox.value = "Error";
  }
}
function squareRoot() {
  try {
    inputBox.value = Math.sqrt(eval(inputBox.value));
  } catch (err) {
    inputBox.value = "Error";
  }
}

function percentage() {
  try {
    inputBox.value = eval(inputBox.value) / 100;
  } catch (err) {
    inputBox.value = "Error";
  }
}
function calculateResult() {
  try {
    // Replace ^ with ** (JS power operator) OR handle it manually
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
function square() {
  try {
    const value = eval(inputBox.value);
    inputBox.value = Math.pow(value, 2);
  } catch (err) {
    inputBox.value = "Error";
  }
}
function cube() {
  try {
    const value = eval(inputBox.value);
    inputBox.value = Math.pow(value, 3);
  } catch (err) {
    inputBox.value = "Error";
  }
}
