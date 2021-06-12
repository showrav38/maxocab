$(document).ready(function(){
  $(".vehicale-content").hover(function(){
    $(this).css("background-color", "#F0C540");
    $(".btn-vehicale").css('background-color', '#273F44');
    }
    ,
    function(){
    $(this).css("background-color", "#fff");
    $(".btn-vehicale").css('background-color', '#F0C540');

  });
});