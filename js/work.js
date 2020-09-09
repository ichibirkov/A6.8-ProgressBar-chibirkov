const progressBar = $("#barstep");
let width = 25;

$(".btn-1").click(function(){
    width = (width + width * 0.01);
    if (width <= 100) {
    	progressBar.width(width + "%")
    	progressBar.text(width + "%")
} else {
	return;
  	
	}   
});

$(".btn-3").click(function(){
    width = (width + width * 0.03);
    if (width <= 100) {
  	progressBar.width(width + "%")
    progressBar.text(width + "%")
} else {
  	return;
	}   
});

$(".btn-7").click(function(){
    width = (width  + width * 0.07);
    if (width <= 100 ) {
  	progressBar.width(width + "%")
    progressBar.text(width + "%")
} else {

  	return ;
	}   
});
