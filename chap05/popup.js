window.onload=init;
function init(){
	window.document.getElementById("link").onclick=openPopup;
}
function openPopup(){
	var child=window.open("popupB.html","POPUP","height=100,width=200,scrollbars=no,resizable=yes,menubar=yes,location=yes,status=no,toolbar=yes",true);
	child.document.write("<h1>From Parent Window</h1>"); //자바스크립트로도 뿌려주는 것이 가능
	//윈도우간 통신한 것
	if((child!=null)&&!child.closed){
		child.focus();
		return false;
	} //크롬은 안해줘도 되는데 소스로는 이렇게 한다
	//반드시 팝업창을 거치게 하고 싶어
	return false;
}