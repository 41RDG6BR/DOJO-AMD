define(["dojo/_base/declare", "./Stack"], function(declare, Stack){
  return declare(Stack, {

    decimalToBinary: function(decNumber){
      const remStack = new Stack();
      let number = decNumber;
      let rem;
      let binaryString = '';

      while(number > 0) {
        rem = Math.floor(number % 2);
        remStack.push(rem);
        number = Math.floor(number / 2);
      }

      while(!remStack.isEmpty()) {
        // binaryString += remStack.pop().toString();
        binaryString += remStack.pop();
      }
      return binaryString
    }
  });
});