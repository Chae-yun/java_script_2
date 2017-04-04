//이벤트(window.onload)발생
window.onload=init; //윈도우가 불려지면 이니트함수 부름

//버튼을 누르는 이벤트
function init(){
	document.getElementById("myForm").onsubmit = calculate;//myform을 제출한다
}
//버튼이 눌리면 계산하자 계산함수 : 버튼이벤트 핸들러
function calculate(){
	//1. 요소값 얻어오기
	var radius = document.getElementById("radius").value;
	var volume = document.getElementById("volume");
	var cal;
	
	//2. 계산
	if(radius>0){
		cal=4/3*Math.PI*radius*radius*radius;

	//3. 뿌려주기
		volume.value=cal.toFixed(2);

		return false; //폼을 이용할 때는 이거 꼭 해야 값 나옴
	}
	else{
		radius.value="";
		alert("반지름은 양수입니다.");
	}
}

//onclick이건 그냥 버튼 클릭
//onsubmit은 폼 관련 클릭?