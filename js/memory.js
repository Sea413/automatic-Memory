// exports.memory = function(click) {
//   var inputArray = [];
//   var rickArray =[rick1,rick2];
//   var mortyArray = [morty1,morty2];
//
//   input = input.split(" ");
//   var inputLength = input.length;
//   return inputLength;
// };
//

var memory = function(input1, input2) {
  var matchCount = 0;
  var failCount = 0;
  if ((input1 === 1 && input2 === 2) || (input1 === 2 && input2 === 1)) {
    matchCount +=1;
  }
  else if ((input1 === 3 && input2 === 4) || (input1 === 4 && input2 === 3)) {
    matchCount +=1;
  }
  else if ((input1 === 5 && input2 === 6) || (input1 === 6 && input2 === 5)) {
    matchCount +=1;
  }
  else if ((input1 === 7 && input2 === 8) || (input1 === 8 && input2 === 7)) {
    matchCount +=1;
  }
  else if ((input1 === 9 && input2 === 10) || (input1 === 10 && input2 === 9)) {
    matchCount +=1;
  }
  else if ((input1 === 11 && input2 === 12) || (input1 === 12 && input2 === 11)) {
    matchCount +=1;
  }
  else if ((input1 === 13 && input2 === 14) || (input1 === 14 && input2 === 13)) {
    matchCount +=1;
  }
  else if ((input1 === 15 && input2 === 16) || (input1 === 16 && input2 === 15)) {
    matchCount +=1;
  }
  else {
    matchCount -=1;
  }
  return matchCount;
}



$(document).ready(function(){
  var counter = 0;
  var flipBack = [];
  $(".question").click(function(){
    event.preventDefault();
    $(this).toggleClass("question");
    var input1;
    var input2;
    var idNumber = $(this).attr('id');
    if (counter === 0) {
      input1 = idNumber;
      flipBack.push(input1);
      counter += 1;
    } else if (counter === 1) {
      input2 = idNumber;
      flipBack.push(input2);
      counter +=1;
    } else {
      counter = 0;
      console.log("in else" + counter)
      console.log(flipBack);
      for (var i = 0; i < flipBack.length; i++) {
        var elementId = document.getElementById(flipBack[i])
          $(elementId).toggleClass("question");
          console.log(elementId);
      }
      flipBack = [];
    }


      // console.log(idNumber);


    //   var matchCount = memory(input1, input2);
    //
    //   if (matchCount === 8) {
    //     var win = "you win!"
    //   } else if (matchCount === -5) {
    //     var lose = "you lose"
    // }
    //

  });
});
