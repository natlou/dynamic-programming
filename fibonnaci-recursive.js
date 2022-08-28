let getFibonacci = function(n) {  
    // TODO: Write - Your - Code
    if (n === 0) {
      return 0;
    } 
  
    if (n === 1) {
      return 1;
    }
    
    return getFibonacci(n - 1) + getFibonacci(n - 2); 
};