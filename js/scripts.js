
/*-------------------------------------
| Hanbuger Menu
-------------------------------------*/
$("#nav").addClass("js");
$("#nav").addClass("js").before('<div id="menu">&#9776;</div>');

$("#menu").click(function(){
	$("#nav").toggle();
});

$(window).resize(function(){
	if(window.innerWidth > 600) {
		$("#nav").removeAttr("style");
	}
});
/*-------------------------------------
| Hover Change Image
-------------------------------------*/

var theImages = document.querySelectorAll('.respond');
var theLightbox = document.querySelector('.lightbox');
var theCloseButton = document.querySelector('.lightbox .close');
var lboxImage=document.querySelector('.lightbox img');
var lboxTitle = document.querySelector('.lightbox .title');


function light_on(){

  var theTitle = this.dataset.title;

  lboxTitle.innerHTML=theTitle;

  var prefix="./img/large/";
  var filename=this.dataset.filename;

  lboxImage.src=prefix+filename;
  theLightbox.style.display='block';

}

var light_off = function(){


  theLightbox.style.display='none';


};

theImages.forEach(function(currentLink){
    currentLink.addEventListener('click',light_on);
    theCloseButton.addEventListener('click',light_off);
});
