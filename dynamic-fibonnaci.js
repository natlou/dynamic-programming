let getFibonacci = function(n) {  
    // TODO: Write - Your - Code
    let current_fib = 1;
    let previous_fib = 0;
  
    if (n === 0) {
      return previous_fib;
    } 
  
    else if (n === 1) {
      return current_fib;
    }
  
    for (let i = 0; i < n - 1; i++) {
      temp = current_fib; 
      current_fib = current_fib + previous_fib;
      previous_fib = temp;
    }
  
    return current_fib;
  
};