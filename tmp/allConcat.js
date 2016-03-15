var memory = require('./../js/memory.js').count;
//
$(document).ready(function(){
  var counter = 0;
  var flipBack = [];
  var matchCount = 0;
  var pointCount = [];
  $(".question").click(function(){
    event.preventDefault();
    $(this).toggleClass("question");
    var input1;
    var input2;
    var input3;
    var idNumber = $(this).attr('id');
    if (counter === 0) {
      input1 = idNumber;
      flipBack.push(input1);
      counter += 1;
    } else if (counter === 1) {
      input2 = idNumber;
      flipBack.push(input2);
      counter +=1;
      var matchCount = memory(parseInt(flipBack[0]), parseInt(flipBack[1]));
      if (matchCount === 1) {
        pointCount.push(matchCount)
      }
    } else {
      counter = 0;
      input3 = idNumber;
      flipBack.push(input3)
      for (var i = 0; i < flipBack.length; i++) {
        var elementId = document.getElementById(flipBack[i])
          $(elementId).toggleClass("question");
      }
      flipBack = [];
      var totalPoints = pointCount.length;
      // console.log(totalPoints);
      if (totalPoints === 8){
        $("#winner").append("You're a winner");
      }
    }
  });
});
