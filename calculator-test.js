
it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    amount: 10000,
    years: 2,
    rate: 0.05
  }
  expect(calculateMonthlyPayment(values)).toEqual('438.71');
  
});

it('should calculate the monthly rate correctly', function () {
  // ...
  let values = {
    amount: 0,
    years: 0,
    rate: 0
  }
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
  
});

it("should return a result with 2 decimal places", function() {
  // ..
  let values = {
    amount: 10000,
    years: 2,
    rate: 0.05
  }
  let result = calculateMonthlyPayment(values);
  let result2DP = parseFloat(result).toFixed(2);

  expect(result).toEqual(result2DP);

});

/// etc
