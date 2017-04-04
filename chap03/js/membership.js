window.onload=function(){
	document.getElementById("myForm").onsubmit = calculate;//myform을 제출한다
}

function calculate(){
	
	var type=document.getElementById("type").value;
	var year=document.getElementById("year").value;
	var cost;

	if(type!=null){

		switch(type){
			case "basic":
				cost=10000; break;
			case "premium":
				cost=15000; break;
			case "gold":
				cost=20000; break;
			case "platinum":
				cost=25000; break;
		}

		cost*=year;

		if(year>=2){
			cost*=0.8;
		}

		document.getElementById("cost").value=cost;

	}

	else{
		document.getElementById("cost").value="유효한 값을 다시 입력하세요";
	}

	return false;
}