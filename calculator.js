window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
   return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


let values = {};
// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.querySelector('#loan-amount');
  let loanYears = document.querySelector('#loan-years');
  let loanRate = document.querySelector('#loan-rate');

  loanAmount.value = 50000;
  loanYears.value = 10;
  loanRate.value = 0.05;
  
  values.amount = loanAmount.value;
  values.years = loanYears.value;
  values.rate = loanRate.value;
  return calculateMonthlyPayment(values);
}


// Get the current values from the UI
// Update the monthly payment
function update() {
  let newValues = getCurrentUIValues();
  values.amount = newValues.amount;
  values.years = newValues.years;
  values.rate = newValues.rate;
  calculateMonthlyPayment(values);
  return updateMonthly(monthly);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {  
   monthly  = ((values.amount*(values.rate/12))/(1-((1+(values.rate/12))**-(values.years*12)))).toFixed(2);
   return monthly;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.querySelector('#monthly-payment');
  monthlyPayment.innerText = calculateMonthlyPayment(values);
  return monthlyPayment.innerText;
}
