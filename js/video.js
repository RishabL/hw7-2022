var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("loop is set to false");

});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	var vidvol = document.getElementById("volume");
	var slider = document.getElementById("slider");
	vidvol.innerHTML = slider.value;
	vidvol.innerHTML += "%";
 });

 document.querySelector("#pause").addEventListener("click", function() {
   console.log("Pause Video");
   video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
   console.log("Slow down video");
   video.playbackRate = video.playbackRate*0.9;
   console.log("Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up Video");
	video.playbackRate = video.playbackRate*(10/9);
	console.log("Speed is " + video.playbackRate);
	
 });

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime = video.currentTime + 10;
	}
	console.log("Video current time is " + video.currentTime);
	
 });

 document.querySelector("#mute").addEventListener("click", function() {
	if(document.getElementById("mute").innerHTML == "Mute"){
		video.muted = true;
		console.log("Mute");
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		console.log("Unmute");
		document.getElementById("mute").innerHTML = "Mute";

	}
	
 });

 document.querySelector("#slider").addEventListener("click", function() {
	var slider = document.getElementById("slider").value;
	var vidvol = document.getElementById("volume");
	console.log("The current value is " + slider/100);
	vidvol.innerHTML = slider;
	vidvol.innerHTML += "%";
	video.volume = slider/100;
	
	
	
 });

 document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
 });

 document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
 });
 

