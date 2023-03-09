function calculate() {
  // Get the values of the input fields and operator dropdown menu
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operator = document.getElementById("operator").value;

  // Check if the user has entered valid numbers
  if (isNaN(num1) && operator !== "sqrt") {
      alert("Please enter a valid number for num1");
      return;
  }
  if (isNaN(num2)) {
      alert("Please enter a valid number for num2");
      return;
  }

  // Perform the appropriate calculation based on the operator
  var result;
  switch (operator) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num1 / num2;
          break;
      case "^":
          result = Math.pow(num1, num2);
          break;
      case "cube":
          result = Math.pow(num1, 3);
          break;
      case "cube-root":
          result = Math.cbrt(num1);
          break;
      case "sqrt":
          result = Math.sqrt(num1);
          break;
      default:
          alert("Please select a valid operator");
          return;
  }

  // Display the result in the result input field
  document.getElementById("result").value = result;
}
function reset() {
    // Clear the input fields and result field
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("operator").value = "+";
    document.getElementById("result").value = "";

    // Prevent the form from submitting and reloading the page
    event.preventDefault();
}
