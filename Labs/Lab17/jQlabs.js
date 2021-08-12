$(document).ready(function(){
  $(".header").click(function(){
    $(".topnav").hide(5000,alert("the nav bar is gone.");
  });
  $("#show").click(function(){
    $(".topnav").show(5000,function(){
      alert("The navbar is back.");
    });
  });
});
