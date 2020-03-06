
var fib = function(N) {

    if(N>0){
    if( N  == 1) return 0; 
    if (N == 2) {
              return 1;
          }
          var current = 0;
          var prev1 = 1;
          var prev2 = 1;
  
          for (var i = 3; i <= N; i++) {
              current = prev1 + prev2;
              prev2 = prev1;
              prev1 = current;
          }
          return current;
        }
  };

// Sample Input: 1   returns output :0
//    Sample Input 0    returns output :undefined
