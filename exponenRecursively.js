function exponen(int, n) {
  
    if (n < 1) {
     return 1;
   } else {
     y = int * exponen(int, n-1)
     return y;
   }
    
  }
  
  console.log(exponen(2, 3))