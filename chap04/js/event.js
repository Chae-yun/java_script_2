window.onload=function(){
	document.getElementById("theForm").onsubmit = process;
}

function process(){
	var start=document.getElementById("start");
	var end=document.getElementById("end");
	var output=document.getElementById("output");
	var message=""; var interval=""; var day=1000*60*60*24;
	var startDate=new Date(start.value);
	var endDate=new Date(end.value);

	if(startDate.getTime()&&endDate.getTime()){ //날짜의 형식 유효성 검사
		if(startDate<endDate){ //시작일이 먼저 나와야 한다.
			var diff=endDate - startDate; //날짜 사이의 간격을 계산한다.
			if(diff<=day){
				interval="1 day";
			}else{
				interval=Math.round(diff/day)+" days";
			}
			message="이벤트 시작일 : "+startDate.toLocaleDateString();
			message+="이벤트 종료일 : "+endDate.toLocaleDateString();
			message+="이벤트 기간 : "+interval+'.';
		}else{
			message="시작일은 종료일보다 앞서야 합니다. ";
		}
	}else { 
		message="형식에 맞게 입력해주세요! MM/DD/YYYY.";
	}
	if(output.textContent!==undefined){
		output.textContent=message;
	}	
	if(output.textContent!==undefined){
		output.textContent=message;
	}else {
		output.innerText=message;
	}
	return false;	//함수마무리
}	//End of process() function