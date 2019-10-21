$(document).ready(function(){

	$("a[href^='#']").click(function(e) {
		e.preventDefault();
		
		var position = $($(this).attr("href")).offset().top;
	
		$("body, html").animate({
			scrollTop: position
		} , "slow");
	});

	
	$(".btn_red").click(function(){
		$(".mainPage").addClass("red")
	  })
	  $(".btn_white").click(function(){
		$(".mainPage").removeClass("red")
	})



	jQuery(function($){

		// Cycle plugin
		$('.slides').cycle({
			fx:     'none',
			speed:   150,
			timeout: 5
		}).cycle("pause");
	
		// Pause &amp; play on hover
		$('.slideshow-block').hover(function(){
			$(this).find('.slides').addClass('active').cycle('resume');
		}, function(){
			$(this).find('.slides').removeClass('active').cycle('pause');
		});
	
	});
})


