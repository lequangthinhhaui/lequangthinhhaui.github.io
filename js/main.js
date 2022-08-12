
$(document).ready(function(){

	$('#navbar ul li a, #hire-me-btn').click(function(){
		var targetElement = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(targetElement).offset().top}, 1000);
	});	

	$('#about ul').slick({
		autoplay      : false,
		autoplaySpeed : 7000,
		speed         : 500,
		arrows        : false,
		fade: false,
		cssEase: 'linear'
	});
	$('#about-slider-prev').click(function(event){
		$('#about ul').slick('slickPrev');
	});
	$('#about-slider-next').click(function(event){
		$('#about ul').slick('slickNext');
	});
});