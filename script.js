document.getElementById("numberInput").addEventListener("input", function () {
  let num = parseInt(this.value);
  let message = document.getElementById("message");

  if (isNaN(num)) {
    message.textContent = "";
    return;
  }

  if (num < 0) {
    message.textContent = "Enter a positive value";
  } else if (num % 2 === 0) {
    message.textContent = `Next even numbers: ${num + 2}, ${num + 4}, ${
      num + 6
    }`;
  } else {
    message.textContent = `Next odd numbers: ${num + 2}, ${num + 4}, ${
      num + 6
    }`;
  }
});
