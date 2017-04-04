﻿window.onload=init;

function init(){
	document.getElementById("myForm").onsubmit=calculate;
}

function calculate(){
	var gae=document.getElementById("gae");
	var type=document.getElementById("type");
	var start=document.getElementById("start");
	var end=document.getElementById("end");
	var room=document.getElementById("room");
	var price=document.getElementById("price");
	
	var interval="";
	var day=1000*60*60*24;
	
	var startDate=new Date(start.value);
	var endDate=new Date(end.value);

	var cost,money;
	
	if(startDate.getTime() && endDate.getTime()){
		if(startDate<=endDate){
			var diff=endDate-startDate;
			interval=Math.round(diff/day);
		}
		else{
			alert("체크인날짜가 체크아웃날짜보다 늦습니다. 다시 입력하세요.");
			return false;
		}
		
	}
	
	var ran=Math.floor(Math.random()*1000)+1;
	switch(type.value){
		case "standard":
			cost=10000; break;
		case "double":
			cost=15000; break;
		case "junior":
			cost=20000; break;
		case "suit":
			cost=25000; break;
	}
	if(interval>=2){
		alert("2박 이상일 경우 숙박비 10%가 할인됩니다");
		money=gae.value*cost*interval*0.9;
	}
	else{
		money=gae.value*cost*interval;
	}
	room.value=ran+"호";
	price.value=money+"원";

	return false;
}