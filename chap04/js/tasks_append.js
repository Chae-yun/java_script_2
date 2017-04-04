window.onload=function(){
	document.getElementById("theForm").onsubmit = addTask;
}

var task_array=[];

function addTask(){
	var task=document.getElementById("task");
	var output=document.getElementById("output");
	var message="";
	
	if(task.value){
		//task_array.push(task.value);
		task_array[task_array.length++]=task.value;
		message+="총 "+task_array.length+"개의 할 일이 있습니다.<br><br><b>오늘 할 일</b><br>";
		for(var i in task_array){
			message+=Number(i)+1+". "+task_array[i]+"<br>";
		}
		output.innerHTML=message;
	}
	return false;

}