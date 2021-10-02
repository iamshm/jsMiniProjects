document.getElementById("loan-form").addEventListener("submit", function (e) {
  // hide results
  document.getElementById("results").style.display = "none";
  // show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResult, 1500);
  e.preventDefault();
});

function calculateResult(e) {
  //  ui var
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value);
  const claculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(years.value) * 12;

  const x = Math.pow(1 + claculatedInterest, calculatedPayment);
  const monthly = (principal * x * claculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = (monthly * calculatedPayment - principal).toFixed(2);
    document.getElementById("results").style.display = "block";
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check numbers");
  }
}

function showError(err) {
  // hiding calculations
  document.getElementById("results").style.display = "none";
  document.getElementById("loading").style.display = "none";
  // getting html element
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  // creating html element
  const errDiv = document.createElement("div");
  errDiv.className = "alert alert-danger";
  // appending err msg to the new html element
  errDiv.appendChild(document.createTextNode(err));
  // insertBefore is used on the parent and we can then add before am html element
  card.insertBefore(errDiv, heading);
  // clear error
  setTimeout(clearErr, 1000);
}
// clear error
function clearErr() {
  document.querySelector(".alert").remove();
}
