var timer;
var currentImg=0;
var tabImg=[
	["images/1.jpg", "first image", "Chat belleville, Paris"],
	["images/2.jpg",	"second image", "Bitch I'm from chicago"],
	["images/3.jpg", "third image", "Chalmers"],
	["images/4.jpg", "fourth image", "New York City lights"],
	["images/5.jpg",	"fifth image", "Shang-hai"],
	["images/6.jpg",	"sixth image", "Paris"]
];

var img = document.getElementById("image");
var suivant=document.querySelector("#suivant");
var precedent=document.querySelector("#precedent");
var numImage=document.querySelector("figureCaption");
var random=document.querySelector("#random");
var firstPage=document.querySelector("#firstpage");
var lastPage=document.querySelector("#lastpage");
var play=document.querySelector("#play");
var stop=document.querySelector("#stop");
var hide=document.querySelector("#hide");
var deleteImage=document.querySelector("#deleteimage");
var bullets=document.querySelector("#bullets");
var buttons=document.querySelector("#buttons");




var numMax=tabImg.length;


var newImage=document.querySelector("#newImage");
var imageURL=document.querySelector("#imageURL");
var imageDescription=document.querySelector("#imageDescription");
var hidden=false;

changeImage();

function changeImage()
{
	img.setAttribute('src', tabImg[currentImg][0]);
	img.setAttribute('alt', tabImg[currentImg][1]);
	numImage.innerHTML= currentImg+1+'/'+tabImg.length;
	addbullets();
}

function addbullets()
{
	bullets.innerHTML="";
	for (var i=0; i<currentImg; i++){
		bullets.innerHTML=bullets.innerHTML + "o";
	}
	bullets.innerHTML=bullets.innerHTML+"O"
	
	for (var i=currentImg+1; i<numMax; i++){
		bullets.innerHTML=bullets.innerHTML +"o"
	}

}


hide.onclick=function(){
	if (hidden==false){
		console.log(buttons);
		console.log(buttons.style);
		buttons.style="display:none;"
		play.innerHTML="";
		random.innerHTML="";
		stop.innerHTML="";
		hide.innerHTML="show buttons";
		hidden=true;
	}else if (hidden==true){
		buttons.style="display:block;"
		play.innerHTML="play";
		random.innerHTML="random";
		stop.innerHTML="stop";
		hide.innerHTML="hide buttons below";
		hidden=false;
	}
}

deleteImage.onclick=function(){
	console.log(deleteImage);
	console.log(currentImg);
	tabImg.splice(currentImg, 1);
	numMax-=1;
	changeImage();
}

newImage.onclick=function(){
	console.log(imageDescription.value);
	console.log(imageURL.value);
	tabImg.push([imageURL.value, "",imageDescription.value ]);
	numMax+=1;
	changeImage();
}



play.onclick=function(){
	console.log('play');
	timer = setInterval(function(){ currentImg+=1; 
		if (currentImg>numMax-1) {
    currentImg=0;
		}	
		changeImage(); }, 3000);
}

stop.onclick=function(){
	console.log('stop');
	clearInterval(timer);
}

img.onclick=function(){
	numImage.innerHTML= currentImg+1+'/'+tabImg.length +'  '+tabImg[currentImg][2];
}

firstPage.onclick=function(){ 
	currentImg=0;
	changeImage();
}

lastPage.onclick=function(){ 
	currentImg=numMax-1;
	changeImage();
}



precedent.onclick=function(){ 
	currentImg-=1;
	//if (currentImg<0{currentImg=6})
	if (currentImg<0) {
    currentImg=numMax-1;
		}
	changeImage();
}


suivant.onclick=function(){ 
	currentImg+=1;
	// if (currentImg==6{currentImg=0;})
	if (currentImg>numMax-1) {
    currentImg=0;
		}
	changeImage();
}

random.onclick=function(){
	var oldCurrentImg = currentImg;
	do 
	{
		currentImg = Math.floor((Math.random() * 6));
	} while(currentImg == oldCurrentImg)
	console.log(currentImg);
	changeImage();
}

function anim(e){

	if(e.keyCode==39){
		console.log('right');
		currentImg+=1;
	// if (currentImg==6{currentImg=0;})
	if (currentImg>numMax-1) {
    currentImg=0;
		}
	changeImage();
		}
	if(e.keyCode==37){
		console.log('left');
		currentImg-=1;
		//if (currentImg<0{currentImg=6})
		if (currentImg<0) {
    currentImg=numMax-1;
			}
		changeImage();
		}
}

document.onkeydown = anim;

/*
document.querySelector("#link").addEventListener("click", function(event)
{
	event.preventDefault();
	console.log("je clique sur le lien");
});
*/
