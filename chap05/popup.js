window.onload=init;
function init(){
	window.document.getElementById("link").onclick=openPopup;
}
function openPopup(){
	var child=window.open("popupB.html","POPUP","height=100,width=200,scrollbars=no,resizable=yes,menubar=yes,location=yes,status=no,toolbar=yes",true);
	child.document.write("<h1>From Parent Window</h1>"); //�ڹٽ�ũ��Ʈ�ε� �ѷ��ִ� ���� ����
	//�����찣 ����� ��
	if((child!=null)&&!child.closed){
		child.focus();
		return false;
	} //ũ���� �����൵ �Ǵµ� �ҽ��δ� �̷��� �Ѵ�
	//�ݵ�� �˾�â�� ��ġ�� �ϰ� �;�
	return false;
}