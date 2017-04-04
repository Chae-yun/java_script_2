window.onload=function(){
	document.getElementById("theForm").onsubmit = process;
}

function process(){ //이게 이밴트 핸들러
	var email=document.getElementById('email').value; //유효성 체크
	var comment=document.getElementById('comment').value;

	if(!email||email.indexOf('@')==-1){
		alert("유효한 주소값을 입력하세요");
	}

	if(!comment||comment.indexOf('<')!=-1){
		alert("코멘트란에 태그를 입력하지 마세요");
	}

	return false;	//함수마무리
}	//End of mObject() function