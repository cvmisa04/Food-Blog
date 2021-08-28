"use strict";
//input for search

var lupica = document.querySelector(".pretraga");
var search1 = document.querySelector(".search1");
var lista = document.querySelector(".hide");
var add1 = document.getElementById("input");
var logo = document.getElementById("logo");
var ulL = document.querySelector(".main-menu");
var search = document.querySelector(".search1");
var sInput = document.querySelector(".search-input");

lupica.addEventListener("click",function(){
	
	
	add1.classList.add("i");
	lista.classList.add("remove");
	
});
search1.addEventListener("click",function(){
	
	
	add1.classList.add("i");
	//lista.classList.add("remove");
	//ulL.style.display=!"block";
	logo.classList.add("remove");
	search.style.visibility="hidden";
	
});

// active links main-menu
$("nav").on("click","ul li",function(){
	$(this).addClass("active").siblings().removeClass("active");
	
});

//active links for breakfast,launch,dinner



$("section").on("click","ol li",function(){
	
	$(this).addClass("active1").siblings().removeClass("active1");
	
	
});

//show breakfast,luch and dinner
var AllData = document.querySelectorAll('[class*="level"]');

function CurentShow(){
			var curentView=this.getAttribute('data-lvl');
			for (var i=0;i<AllData.length;i++){
				AllData[i].style.display ='none';
			}
			var lvlToShow = document.querySelector('.'+curentView);
			lvlToShow.style.display="flex";
		}


function show(){
	var showDataLvl = document.querySelectorAll('[data-lvl]');
	for (var i=0; i<showDataLvl.length;i++){
		var link=showDataLvl[i];
		link.addEventListener('click',CurentShow);
	}
}
show();
//slider

var slide = document.querySelector(".slide-corousel");
var corouselImg= document.querySelectorAll(".slide-corousel div");

//prev,next
var prevL = document.querySelector(".prev");
var nextL = document.querySelector(".next");
//counter
var counter = 1;
var size = corouselImg[0].clientWidth;
slide.style.transform = 'translateX('+(size*counter)+'px)';

//prev,next listener

prevL.addEventListener("click",function(){
	
	if(counter >=corouselImg.length || counter===1) {return ;}
	slide.style.transition="transform 1s ease-in-out";
	
	counter++;
	
	slide.style.transform = 'translateX('+(size*counter)+'px)';
	

		

	
});
nextL.addEventListener("click",function(){

	if(counter<=0){return;}
	slide.style.transition="transform 1s ease-in-out";
	counter--;
	
	slide.style.transform = 'translateX('+(size*counter)+'px)';
	


	
});
slide.addEventListener("transitionend",First);

var lastClone1 = document.querySelector(".lastClone");
var firstClone1 = document.querySelector(".firstClone");
function First(){
	if(corouselImg[counter]===lastClone1){
		slide.style.transition="none";
		counter = corouselImg = - counter;
		slide.style.transform = 'translateX('+(size*counter)+'px)';
	}
	if(corouselImg[counter]===firstClone1){
		slide.style.transition="none";
		counter = corouselImg= - counter;
		slide.style.transform = 'translateX('+(size*counter)+'px)';
	}
}

//object user

  var korisnik = 
    {
      img: "image/user-image.png",
      name : "Carrie Gordon",
     city: "NOVI SAD, SERBIA",
	note: '“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.”'
    };
	


//show data user

let userImg= document.querySelectorAll('[class*="user-img"]');
let userName= document.querySelectorAll('[class*="name-user"]');
let userNote= document.querySelectorAll('[class*="note-user"]');

//image
userImg[0].innerHTML='<img src="'+korisnik.img+'">';
userImg[1].innerHTML='<img src="'+korisnik.img+'">';

userImg[0].style.position="absolute";
userImg[1].style.position="absolute";

//name,city
userName[0].innerHTML=korisnik.name+"<br>"+korisnik.city;
userName[1].innerHTML=korisnik.name+"<br>"+korisnik.city;

//note
userNote[0].innerHTML=korisnik.note;
userNote[1].innerHTML=korisnik.note;

lastClone1.style.color="white";
firstClone1.style.color="white";


//hamburger-button ,listener

let hamburgerBtn = document.getElementById("hamburger-button");
let nav =	document.querySelector("nav");
let cancel = document.querySelector("#cancel");
let home = document.querySelector(".home");

hamburgerBtn.addEventListener("click",function(){
	document.querySelector(".main-menu").classList.toggle("show");
	nav.style.backgroundColor="#f6c695";
	document.querySelector(".main-menu").style.transition="transform 0.9s ease-in-out";
	nav.style.zIndex="1";
	
	hamburgerBtn.style.visibility="hidden";
	cancel.style.display="block";
	
	
});
//cancel-button,listener

cancel.addEventListener("click",function(){

	
	document.querySelector(".main-menu").classList.toggle("show");
	
	nav.style.backgroundColor="transparent";
	document.querySelector(".main-menu").style.transition="none";
	hamburgerBtn.style.visibility="visible";
	cancel.style.display="none";
		
	
	hamburgerBtn.style.zIndex="1" ;

	 
});
	










  













