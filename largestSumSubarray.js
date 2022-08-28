let findMaxSumSubArray = function(A) {
    //TODO: Write - Your - Code
    let globalMax = A[0]; 
    let currentMax = A[0]; 
  
    for (let i = 1; i < A.length; i++) {
  
      if (currentMax < 0) {
        currentMax = A[i]; 
      } else {
        currentMax += A[i]; 
      }
  
      if (currentMax > globalMax) {
        globalMax = currentMax; 
      }
  
    } 
  
    return globalMax; 
};