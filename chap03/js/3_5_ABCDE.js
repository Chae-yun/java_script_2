window.onload=init;

   function init(){
	   document.getElementById("myForm").onsubmit = calculate;
   }
   //버튼이 눌리면 계산하자 계산함수 : 버튼이벤트 핸들러
   function calculate(){

	   var kor = Number(document.getElementById("kor").value);
	   var eng = Number(document.getElementById("eng").value);
	   var math = Number(document.getElementById("math").value);
	   var aver = document.getElementById("aver");
	   var abcde = document.getElementById("abcde");
	   var calEver;
	   var calAbc;

       calEver=(kor+eng+math)/3; //3.0 안해도 되는게 정수나 실수나 넘버(아마 실수로)이기 때문
	   alert(calEver);
	   aver.value=calEver.toFixed(2);

	   if(calEver>=0&&calEver<=100){
		   if(calEver>=90)
			   abcde.value="A";
		   else if(calEver>=80)
			   abcde.value="B";
		   else if(calEver>=70)
		 	   abcde.value="C";
		   else if(calEver>=60)
			   abcde.value="D";
		   else
			   abcde.value="F";
	   }
	   else
		   alert("0~100까지만 입력하세요!");

	   return false;
   }