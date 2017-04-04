window.onload=initControls;

var video, pButton, curTime, curPos, curVol, arr, mm, ss;

function initControls(){
	video=document.querySelector("video");

	//playButton에 대한 참조 저장
	pButton=document.getElementById("playButton");

	//volumeButton에 대한 참조 저장
	vButton=document.getElementById("volumeButton");

	//지금까지 재생된 시간에 대한 참조 저장 및 0:00으로 초기화
	curTime=document.getElementById("timePlayed");
	curTime.innerHTML="0:00";

	//실행된 재생 위치에 대한 참조값 생성 및 최대값(duration)지정
	curPos=document.getElementById("currentPosition");
	curPos.max=video.duration; //비디오의 duration 속성

	//볼륨값에 대한 참조값 생성 및 초기화 100% 설정
	curVol=document.getElementById("currentVolume");
	curVol.innerHTML="100%"; //비디오의 volume 속성
	2016-12-05
	video.volume=1; //비디오의 volume 속성
	vButton.value="■";
}

var updateProgress = function(ctrl){
	if(ctrl){
		//슬라이더(range)객체 값을 전달받아, 즉 실행중이라면 현재 재생 위치값으로 배정
		video.currentTime=ctrl.value;
	}
	else{
		//슬라이더(range)객체 값이 없다면, 즉 실행중이지 않다면 비디오의 현재값을 curPos값으로 배정
		curPos.value=video.currentTime;
	}

	//초단위 시간값을 mm:ss형태로 만든다
	mm=Math.floor(video.currentTime/60.0);
	ss=parseInt(video.currentTime)%60;
	curTime.innerHTML=mm+":"+ss;
} //익명함수 형식

var selectScene = function(ctrl){
	//재생시간(0:00)을 재생 위치 시간에 맞는 형식으ㅗㄹ 변환
	arr=ctrl.value.split(":");
	video.currentTime=parseFloat((arr[0]*60)+(arr[1]*1));
	//재생위치값을 변경
	updateProgress();
	_play(); //재생
} //익명함수 형식

var _play = function(){
	video.play();
	pButton.src="stop.png"; //버튼을 멈춤 상태로 변경
}

var _pause = function(){
	video.pause();
	pButton.src="play.png"; //버튼을 멈춤 상태로 변경
}

var playPause = function(){
	if(video.paused){
		_play();
	}
	else{
		_pause();
	}
}

//볼륨을 조절, 0~1 사이에서 0.01step값을 가지므로 100을 곱한다
var adjustVolume = function(ctrl){
	video.volume = ctrl.value; //기본 속성
	curVol.innerHTML = Math.round(ctrl.value*100)+"%";
}

var mute = function(ctrl){
	if(video.muted){ //기본 속성
		video.muted=false;
		vButton.src="nosound.png";
	}else{
		video.muted=true;
		vButton.src="sound.png";
	}
}