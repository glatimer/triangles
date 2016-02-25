
var triangle = function(userInput1, userInput2, userInput3) {
  if ((userInput1 === userInput2) && (userInput1 === userInput3)){
      return "equilateral";
  } else if (((userInput1===userInput2) && (userInput1 !== userInput3)) ||
        ((userInput1===userInput3) && (userInput1 !== userInput2)) ||
        ((userInput2===userInput3) && (userInput2 !== userInput1))) {
      return "isoscelese";
    } else {
      return "scalene";
    }
  };

$(document).ready(function() {
  $("form").submit(function(event) {
  var userInput1 = parseInt($("input#side1").val());
      userInput2 = parseInt($("input#side2").val());
      userInput3 = parseInt($("input#side3").val());




   event.preventDefault();
 });
});
