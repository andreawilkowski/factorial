// var factorialGo = function(num) {


  //return num;
//}

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    //debugger;
    event.preventDefault();
    var num = parseInt($("input#number").val());
    var total = 1;
    for (i = 1; i <=num; i++) {
      total = total * i;
    }
    console.log(total);
    //var result = factorialGo(num);
  });
});
