exports.memory = function(input1, input2) {
  var matchCount =0;
  if ((input1 === 1 && input2 === 2) || (input1 === 2 && input2 === 1)) {
    matchCount +=1;
  }
   if ((input1 === 3 && input2 === 4) || (input1 === 4 && input2 === 3)) {
    matchCount +=1;
  }
   if ((input1 === 5 && input2 === 6) || (input1 === 6 && input2 === 5)) {
    matchCount +=1;
  }
   if ((input1 === 7 && input2 === 8) || (input1 === 8 && input2 === 7)) {
    matchCount +=1;
  }
   if ((input1 === 9 && input2 === 10) || (input1 === 10 && input2 === 9)) {
    matchCount +=1;
  }
   if ((input1 === 11 && input2 === 12) || (input1 === 12 && input2 === 11)) {
    matchCount +=1;
  }
   if ((input1 === 13 && input2 === 14) || (input1 === 14 && input2 === 13)) {
    matchCount +=1;
  }
   if ((input1 === 15 && input2 === 16) || (input1 === 16 && input2 === 15)) {
    matchCount +=1;
  }
  // else {
  //   matchCount -=1;
  // }
  return matchCount;
};
