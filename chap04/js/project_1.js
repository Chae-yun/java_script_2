window.onload=init;

var canvas;
var ctx;
var stuff=[];
var diffx;
var diffy; //이동시 거리유지(끈끈이 효과)
var thingInmotion;
var submit
var i;//인덱스 몇부터 몇까지 계속 뿌려라
//모든 함수가 공유하도록 할 것임 (전역변수)
//함수 안에 var라고 하면 지역변수

function init(){
	//캔버스 사용 초기화 -> js의 다양한 api 사용 가능
	canvas=document.getElementById("canvas");
	submit=document.getElementById("submit"); //여기 바로 onclick이나 onsubmit 써도 됨
	ctx=canvas.getContext("2d"); //환경설정 2줄 //3d라고 하면 안됨

	/*ctx.fillStyle="red";
	ctx.fillRect(0,0,100,100); //(시작점 x,시작점 y,가로,높이)
	ctx.strokeStyle="blue";
	ctx.strokeRect(100,100,100,100);

	ctx.fillStyle="red";
	ctx.beginPath();
	ctx.arc(100,100,50,0,2*Math.PI,true); //마지막 불린 false면 반대로 그린다 근데 뭐 상관이 있나
	//ctx.arc(100,100,50,0,1*Math.PI,true); //이건 반원
	ctx.closePath();
	ctx.fill();

	//우리가 직접 그릴 필요가 없다 이거임*/

	//submit.onclick=remove; //onsubmit도 되고
	submit.addEventListener("click",remove,false); //더 세련된 방법
	canvas.addEventListener("dblclick",copyItem,false);
	canvas.addEventListener("mousedown",startDrag,false);
	//딸깍 하면 나인지 확인하고 맞으면 이동준비

	var r1=new Rect(50,100,20,200,"pink");
	var r2=new Rect(250,200,100,200,"#66ccff");
	var r3=new Rect(200,50,70,50,"#52ce2a");
	var r4=new Rect(270,280,30,50,"#aa24be");
	var c1=new Circle(150,400,100,"red"); //캔버스 밖으로 나가면 짤림
	var c2=new Circle(450,300,30,"#f6ce2f");

	//r1.draw();

	stuff.push(r1);
	stuff.push(r2);
	stuff.push(r3);
	stuff.push(r4);
	stuff.push(c1);
	stuff.push(c2);

	drawstuff(); //계속 다시그려야 하다보니 한번에 쫙 그리는 게 편함

} //생성자 함수 == 자바의 클래스

function Rect(x,y,w,h,c){ //Rect 생성자 함수 //매개변수는 다 오브젝트 여서 뭘 넘기는 상관 노
	//뭐 빼고 다 오브젝트라고...?
	//속성
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.c=c;
	
	//메서드
	this.draw=function drawRect(){
		//그릴 때 r1.drawRect, c1.drawCircle 안하고 r1.draw, c1.draw 하기 위해서 => 메소드 재정의(오버라이딩???로딩아님????)
		ctx.fillStyle=this.c;
		ctx.fillRect(this.x,this.y,this.w,this.h); //js에서 지원해주는 거!
	}

	this.overCheck=function overRect(mx,my){
		if ((this.x<=mx) && (mx<=(this.x+this.w)) && (this.y<=my) && (my<=(this.y+this.h))){
			return true;
		} else{
			return false;
		}
	}
}
//drawRect => fillStyle, fillRect를 이용하여 사각형을 그리기
//overRect(mx,my) => 마우스의 x,y 좌표를 읽어 들여 마우스가 본 도형 위에 있는지를 확인
//x<(=)mx<(=)x+w
//y<(=)my<(=)y+h
//이게 있어야 선택된지 알아!

function Circle(x,y,r,c){
	//속성
	this.x=x;
	this.y=y;
	this.r=r;
	this.c=c;
	
	//메서드
	this.draw=function drawCircle(){
		ctx.fillStyle=this.c;
		ctx.beginPath();
		ctx.arc(this.x,this.y,r,0,2*Math.PI,true);
		ctx.closePath();
		ctx.fill();
	}

	this.overCheck=function overCircle(mx,my){
		if (Math.sqrt(Math.pow(this.x-mx,2)+Math.pow(this.y-my,2))<=this.r){
			return true;
		} else{
			return false;
		}
	}
}
//arc(x,y,radius,startAngle,endAngle,anticlockwise)
//각도는 라디언 각도를 사용 360==2*Math.PI
//원래 arc는 부채꼴

function drawstuff(){
	ctx.clearRect(0,0,600,400); //왜 클리어서클은 없어
	for(i=0;i<stuff.length;i++){
		stuff[i].draw();
	}
}//캔버스는 계속 다시 그림 뭐 하나 옮기면 1000분의 1초마다 다시 뿌림
//계속 draw()할 수 없으니까 (너무 많아서 귀찮아) 이 함수 사용

function copyItem(e){ //이벤트
	mx=e.offsetX; //이런 속성을 주면 이벤트가 발생한 곳의 x좌표를 가지고 옴 X는 대문자!! 지원해줌
	my=e.offsetY;
	for(i=stuff.length-1;i>=0;i--){
		if(stuff[i].overCheck(mx,my)==true){
			item=clone(stuff[i]); //객체 복사
			item.x+=50;
			item.y+=50;
			stuff.push(item);
			break;
		}
	}
	drawstuff();
}

function clone(obj){
	var newItem=new Object();
	for(var key in obj){
		newItem[key]=obj[key];
	}
	return newItem;
}

function startDrag(e){
	mx=e.offsetX;
	my=e.offsetY;
	for(i=stuff.length-1;i>=0;i--){
		if(stuff[i].overCheck(mx,my)==true){
			diffx=mx-stuff[i].x;
			diffy=my-stuff[i].y;
			
			//드래그한 것을 배열의 가장 뒤로 보내기 위한 준비 작업
			var item=stuff[i];
			thingInmotion=stuff.length-1;
	
			//진짜 작업, 근데 스플라이스 하면 뒤에서 땡겨져?
			stuff.splice(i,1);
			stuff.push(item);

			canvas.style.cursor="crosshair"; //커서 모양 바꾸기

			canvas.addEventListener("mousemove", moveit, false);
			canvas.addEventListener("mouseup", dropit, false);
			break;
		}
	}
	//마우스를 따라갈 때 클릭한 대로 그 거리를 유지하면서 따라가는 게 끈끈이 효과
	//아님 기준점이 마우스에 탁 달라붙어서 이상함
}

function moveit(e){
	//마우스의 x,y 좌표를 가장 마지막 객체의 x,y좌표에 준다 (끈끈이 처리해서)
	mx=e.offsetX;
	my=e.offsetY;
	stuff[thingInmotion].x=mx-diffx;
	stuff[thingInmotion].y=my-diffy;
	drawstuff();
}

function dropit(e){
	canvas.style.cursor="auto";
	canvas.removeEventListener("mousemove", moveit, false);
	canvas.removeEventListener("mouseup", dropit, false);
}

function remove(){
	stuff.pop();
	drawstuff();
}

//이 소스 굉장히 중요!