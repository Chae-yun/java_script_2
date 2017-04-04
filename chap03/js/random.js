window.onload=function(){
	var button;
	button=document.getElementById("but");
	result=document.getElementById("result");
	button.onclick=function(){
		var num="";
		for(var i=1;i<=6;i++){
			num+=parseInt((Math.random()*99),10)+" "; //여기 왜 띄어쓰기 여러개 하면 안돼??
		}
		if(result.textContent!==undefined){
			result.textContent=num;
		} else {
			result.innerText=num;
		}
	}
}