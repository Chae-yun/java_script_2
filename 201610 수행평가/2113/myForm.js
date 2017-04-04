window.onload=init;

var lastName;
var firstName;
var mobile;
var expression1 = /^\d{3}-\d{3}-\d{4}$/; //하이픈이 있는 경우
var expression2 = /^\d{10}$/; //하이픈이 없는 경우

function init(){
	//사용을 위해 받아오기
	lastName = new LN(document.getElementById('lastName'));
	firstName = new FN(document.getElementById('firstName'));
	var email = document.getElementById('email');
	mobile = new MB(document.getElementById('mobile'));
	var check = document.getElementById('check');
	var submit = document.getElementById('submit');

	submit.disabled=true; //버튼 비활성화

	lastName.name.addEventListener('focusout',function (){
		if(!lastName.name.value.replace(/ /gi,'')){ //없거나 공백만 있는 경우를 체크
			lastName.addErrorMessage();
		} //if()
	},false); //익명함수

	firstName.name.addEventListener('focusout',function (){
		if(firstName.name.value.length < 1 || firstName.name.value.length > 5
			|| !firstName.name.value.replace(/ /gi,'')){ //길이 제한 & 공백만 있으면 안되는 것 체크
			firstName.addErrorMessage();
		} //if()
	},false); //익명함수

	email.addEventListener('focusout',checkEmail,false);

	mobile.number.addEventListener('focusout',function (){
		if(!expression1.test(mobile.number.value) && !expression2.test(mobile.number.value)){ //정규표현식으로 체크
			mobile.addErrorMessage();
		} //if()
	},false); //익명함수

	check.addEventListener('change',checkCheck,false);

	submit.addEventListener('click',function (e){
		e.preventDefault(); //return false를 해도 값이 사라지길래 인터넷 검색해서 찾았어요!
		if(!lastName.name.value){
			lastName.addErrorMessage();
			lastName.name.focus(); //초점 맞추기
		}
		else if(!firstName.name.value){
			firstName.addErrorMessage();
			firstName.name.focus(); //초점 맞추기
		}
		else if(!email.value){
			checkEmail();
			email.focus(); //초점 맞추기
		}
		else if(!mobile.number.value){
			mobile.addErrorMessage();
			mobile.number.focus(); //초점 맞추기
		}
		else{
			document.body.style.backgroundImage = "url('after.gif')";
		} //한번도 포커스가 가지 않았을 때를 대비해서 필수입력 구현, 모두 값이 있으면 배경 바꾸기
	},false); //익명함수

	function checkEmail(){
		if(!email.value || email.value.indexOf('@')==-1){ //유효성 검사
			alert('유효한 주소값을 입력하세요');
			email.select(); //블록 씌우기
		} //if()
	} //checkEmail()

	function checkCheck(){
		if(check.checked==true){ //체크 박스 체크가 되어있나
			submit.disabled=false; //버튼 활성화
			submit.style.backgroundColor='#FFCCCC'; //버튼 색 예쁘게 변경
		} //if()
		else{
			submit.disabled=true; //버튼 비활성화
			submit.style.backgroundColor='#DBDBDB'; //버튼 색 다시 회색으로 변경
		} //else
	} //checkCheck()

} //init()

function LN(name){
	this.name = name;
	this.addErrorMessage = function addLNErrorMessage(){
		alert('성을 입력해주세요!');
		name.focus(); //초점 맞추기
	} //addLNErrorMessage()
} //LN()

function FN(name){
	this.name = name;
	this.addErrorMessage = function addFNErrorMessage(){
		alert('이름은 1글자에서 5글자 사이로(공백포함) 입력해주세요\n공백만 있어도 안돼요!');
		name.select(); //블록 씌우기
	} //addFNErrorMessage()
} //FN()

function MB(number){
	this.number = number;
	this.addErrorMessage = function addMBErrorMessage(){
		alert('전화번호는 XXX-XXX-XXXX 형식이나 XXXXXXXXXX 형식으로 입력해주세요!');
		number.select(); //블록 씌우기
	} //addMBErrorMessage()
} //FN()
