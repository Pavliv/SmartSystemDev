// Burger menu
function myFunction(x) {
	x.classList.toggle("change");
}


// Init caroseul
$(document).ready(function () {
	var $s = $('.carousel');
	$s.slick({
	autoplay: false, 
	dots: true,
	arrows: true,
	pauseOnFocus: false,
	pauseOnHover: false,
	});
});
// Change symbols for arrows
$(document).ready(function () {
	$(".slick-next").text(">");
	$(".slick-prev").text("<");
});