window.onload=init;
function init(){
	document.getElementById("myForm").onsubmit=sortword;
}
function sortword(){
	var words = document.getElementById("words").value;
	var output = document.getElementById("output");
	//대소문자 처리
	words = words.toLowerCase();
	//문자열 -> 배열 : split()
	words = words.split(" ");
	//정렬 : sort()
	var sorted = words.sort();
	//배열 -> 문자열 : join()
	sorted = sorted.join(" ");
	//화면에 뿌리기
	if(output.textContent !== undefined){
		output.textContent = sorted;
	}else{
		output.innerText = sorted;
	}

	return false;
}