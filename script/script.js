// Burger menu 
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


// jQuery Validation
$(function() {
	$("form[name='registration']").validate({
		rules: {
			name: "required",
			question: "required",
			email: {
				required: true,
				email: true
			},
		},
		messages: {
			name: "Please enter your name",
			question: "Please enter your question",
			email: "Please enter a valid email address"
		},
		submitHandler: function(form) {
			form.submit();
		}
	});
});