const logAlert = (msg) => {
  alert(msg);
  console.log(msg);
};

function calculate() {
  const left = parseInt(document.getElementById("left").value);
  const right = parseInt(document.getElementById("right").value);
  const operator = document.getElementById("operator").value;

  if (left < 0 || right < 0 || isNaN(left) || isNaN(right)) {
    logAlert("Error :(");
    return;
  }

  let result;
  switch (operator) {
    case "+":
      result = left + right;
      break;
    case "-":
      result = left - right;
      break;
    case "*":
      result = left * right;
      break;
    case "/":
    case "%":
      if (right === 0) {
        logAlert("It's over 9000!");
        return;
      }
      result = operator === "/" ? left / right : left % right;
      break;
    default:
      logAlert("Error :(");
      return;
  }

  logAlert(`Result: ${result}`);
}

document.getElementById("calc").addEventListener("click", calculate);

setInterval(() => {
  alert("Please, use me...");
}, 30 * 1000);
