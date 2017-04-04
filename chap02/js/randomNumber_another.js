window.onload=init;

var button1;
var buttonB;//지역변수 선언

function init(){
 button1=document.getElementById("buttonA"); //id로 html요소 읽어오기
 buttonB=document.getElementById("buttonB");

 button1.onclick=function(){ //함수 안에 함수
  result.innerHTML=Math.floor(Math.random()*10+1);
 }
 buttonB.onclick=function(){
  result.innerHTML=Math.floor(Math.random()*99+1);
 }
}