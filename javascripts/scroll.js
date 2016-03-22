$(document).ready(function() {



	$(window).on("scroll", function(){
	   if ($(this).scrollTop() > 0) {
	    $(".navbar").css("background-color", 'rgba(0,0,0,.5)');
	      } else {
	      	$(".navbar").css("background-color", 'rgba(0,0,0,.0)');
	      }
	    });

});