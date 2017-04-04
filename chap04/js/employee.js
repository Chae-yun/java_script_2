window.onload=function(){
	document.getElementById("theForm").onsubmit = mObject;
}

function mObject(){ //이게 이밴트 핸들러
	var firstName=document.getElementById("firstName").value;
	var lastName=document.getElementById("lastName").value;
	var department=document.getElementById("department").value;
	var date=new Date();
	var output=document.getElementById("output");
	var message="";

	var employee={
		이름:firstName,
		성:lastName,
		부서:department,
		고용일:date.toDateString()
	};

	with(employee){
		message="<h2>추가된 사원</h2>이름 : "+성+","+이름+"<br>부서 : "+부서+"<br>고용일 : "+고용일;
	}
	output.innerHTML=message;

	return false;	//함수마무리
}	//End of mObject() function