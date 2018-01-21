// Burger menu 
//Start at 1024px resolution
function myFunction(x) {
	x.classList.toggle("change");
}
$(".burgerMenu").click(function () {
	$(".navMenu").hide(1);
	$(".navMenu").css("display", "block");
	$(".navBar").hide(1);
	$(".navBar").css("display", "block");
});


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
