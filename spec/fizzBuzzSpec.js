describe('FizzBuzz', function() {

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  describe('output', function() {
    it('should output the numbers 1 to 100 with appropriate fizzing and buzzing', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.output()
      expect(console.log).toHaveBeenCalledWith(1);
      expect(console.log).toHaveBeenCalledWith('fizz');
      expect(console.log).toHaveBeenCalledWith('buzz');
      expect(console.log).toHaveBeenCalledWith(7);
      expect(console.log).toHaveBeenCalledWith('fizzbuzz');
      expect(console.log).not.toHaveBeenCalledWith(3);
      expect(console.log).not.toHaveBeenCalledWith(5);
      expect(console.log).not.toHaveBeenCalledWith(15);
      expect(console.log).not.toHaveBeenCalledWith(101);
    });
  });

  describe('calculate', function() {
    it('should output fizz when given the number 3', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.calculate(3)
      expect(console.log).toHaveBeenCalledWith('fizz');
    });

    it('should output buzz when given the number 5', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.calculate(5)
      expect(console.log).toHaveBeenCalledWith('buzz');
    });

    it('should output fizzbuzz when given the number 15', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.calculate(15)
      expect(console.log).toHaveBeenCalledWith('fizzbuzz');
    });

    it('should output fizz when given the number 12', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.calculate(12)
      expect(console.log).toHaveBeenCalledWith('fizz');
    });

    it('should output buzz when given the number 20', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.calculate(20)
      expect(console.log).toHaveBeenCalledWith('buzz');
    });

    it('should output 7 when given the number 7', function() {
      console.log = jasmine.createSpy('log')
      fizzBuzz.calculate(7)
      expect(console.log).toHaveBeenCalledWith(7);
    });
  });

});
