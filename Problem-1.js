class Operation {
    constructor(a, b) {
      this.a = a;
      this.b = b;
    }
  
    addition() {
      console.log(`Addition is ${this.a + this.b}`);
    }
  
    subtraction() {
      console.log(`Subtraction is ${this.a - this.b}`);
    }
  
    multiplication() {
      console.log(`Multiplication is ${this.a * this.b}`);
    }
  
    division() {
      if (this.b !== 0) {
        console.log(`Division is ${this.a / this.b}`);
      } else {
        console.log("Error: Division by zero is not allowed.");
      }
    }
  
    calculate(operation) {
      switch (operation.toLowerCase()) {
        case "add":
          this.addition();
          break;
        case "sub":
          this.subtraction();
          break;
        case "mul":
          this.multiplication();
          break;
        case "div":
          this.division();
          break;
        default:
          console.log("Invalid operation. Use add, sub, mul, or div.");
      }
    }
  }
  
  
  const calc = new Operation(10, 5);
  calc.calculate("add"); 
  calc.calculate("sub"); 
  calc.calculate("mul"); 
  calc.calculate("div"); 
  