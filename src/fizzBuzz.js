function FizzBuzz() {
};

FizzBuzz.prototype.output = function() {
  for (i = 1; i <= 100; i++) {
    this.calculate(i);
  }
};

FizzBuzz.prototype.calculate = function(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('fizzbuzz')
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 ===0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
};
