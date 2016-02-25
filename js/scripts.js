
var equilateral = function(input) {
  if (input % 3 === 0) {
    return true;
    } else {
      return false;
    }
  var isoscelese = function() {
    if (((userInput1+userInput2)%2===0) || ((userInput1+userInput3)%2===0) || ((userInput2+userInput3)%2===0))  {
      alert("This is an isoscelese triangle.");
    } else {
      alert("This is an scalene triangle.");
    }
  };
  







$(document).ready(function() {
  $("form").submit(function(event) {
  var userInput1 = parseInt($("input#side1").val());
      userInput2 = parseInt($("input#side2").val());
      userInput3 = parseInt($("input#side3").val());
      input = userInput1 + userInput2 + userInput3;


      $(".result").show();


   event.preventDefault();
 });
});
