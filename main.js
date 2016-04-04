$(document).ready(function(){
var moveClass = ".text";
var mCheight = 50;
var mCwidth = 200;
var windowW = $(window).width();
var windowH = $(window).height();
var speed = 200;
var moveDist = 50;
var max = windowW-mCwidth;
var right = true;
var count = 0;

$(moveClass).css('top',(windowH/2-mCheight/2)+'px');

currentX = function(){
  return $(moveClass).offset().left;
}

move = function(){
  var x = currentX();
  if(right){
    //move to the right
    $(moveClass).animate({left:"+="+moveDist+"px"},speed);
  }
  else{
    //move to the left
    $(moveClass).animate({left:"-="+moveDist+"px"},speed);
  }
  if(x>=max && right){
    right = false;
    count = 0;
  }
  //not working. Why?
  if(x<0 && !right){
    right = true;
    count = 0;
  }
count++;
setTimeout(function(){
      move();
    },500);



}

move();







});
