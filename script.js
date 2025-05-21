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
