const progressBar = $("#barstep");
let width = 25;


$(".btn-1").click(function(){
    width = width + 1
    if (width <= 100) {
    	progressBar.width(width + "%")
    	progressBar.text(width + "%")
}   else {
	    progressBar.width(100 + "%")
      	progressBar.text(100 + "%")
	}
});

$(".btn-3").click(function(){
    width = width + 3
    if (width <= 100) {
  		progressBar.width(width + "%")
    	progressBar.text(width + "%")
}   else {
    	progressBar.width(100 + "%")
    	progressBar.text(100 + "%")
	}
});

$(".btn-7").click(function(){
    width = width + 7
    if (width <= 100) {
    	progressBar.width(width + "%")
    	progressBar.text(width + "%")
}   else {
    	progressBar.width(100 + "%")
    	progressBar.text(100 + "%")
  }
});