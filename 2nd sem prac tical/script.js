// script.js
function checkPrime() {
  let num = document.getElementById("numberInput").value;
  let result = document.getElementById("result");

  if (num <= 1) {
    result.textContent = num + " is NOT a prime number.";
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    result.textContent = num + " is a PRIME number.";
  } else {
    result.textContent = num + " is NOT a prime number.";
  }
}