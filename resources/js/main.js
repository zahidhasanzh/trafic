(function ($) {
	"strict";

$(document).ready(function($){

	$(".homepage_slides").owlCarousel({

		items:1,
		autoplay:true,
		loop:true,
		dots:true,
		nav:true,
		navText:["<i class='zmdi zmdi-arrow-left'></i>","<i class='zmdi zmdi-arrow-right'></i>"]

	});

	$(".case_studys_carousel").owlCarousel({

		autoplay:true,
		margin:30,
		loop:true,
		dots:true,
		nav:false,
		responsive : {

		    0 : {
		        items:1
		    },

		    768 : {
		        items:2
		    },

		    992 : {
		        items:3		    }
		}

	});

	$(".case_studys_carousel_2").owlCarousel({

		items:5,
		autoplay:true,
		loop:true,
		dots:true,
		nav:false,
		responsive : {

		    0 : {
		        items:1
		    },

		    768 : {
		        items:3
		    },

		    992 : {
		        items:6		    
		    }
		}

	});

	$(".testimonial_carousel").owlCarousel({

		items:1,
		loop:true,
		dots:true,
		nav:false

	});

	$(".logo_carousel").owlCarousel({

		autoplay:true,
		loop:true,
		dots:false,
		nav:false,
		responsive : {

		    0 : {
		        items:2,
		        margin:5
		    },

		    768 : {
		        items:4,
		        margin:10
		    },

		    992 : {
		        items:6,
		        margin:0	
		    }
		}

	});

	// change layer

	$(".boxed_layout").on('click',function(){
		$(".site").addClass("boxed_layout").removeClass("wide_layout");
		$("body").addClass("boxed_layout").removeClass("wide_layout");
		$(".layout_changer span").removeClass("active");
		$(this).addClass("active");
	});

	$(".wide_layout").on('click',function(){
		$(".site").addClass("wide_layout").removeClass("boxed_layout");
		$("body").addClass("wide_layout").removeClass("boxed_layout");
		$(".layout_changer span").removeClass("active");
		$(this).addClass("active");
	});


	//search bar
	$(".search_trigger").on('click',function(){
		$(".search_bar_wrap").addClass("active");
	});

	$(".search_close").on('click',function(){
		$(".search_bar_wrap").removeClass("active");
	});

	// offcanvas menu
	$(".manu_trigger").on('click',function(){

		$(".off_canvas_menu").addClass("show_off_class_menu");
		$(".off_canvar_shade").addClass("active");
	});

	$(".menu_close, .off_canvar_shade").on('click',function(){

		$(".off_canvas_menu").removeClass("show_off_class_menu");
		$(".off_canvar_shade").removeClass("active");
	})

	// testimonial hover
	$(".single_testimonial_box").hover(function(){
		$(".single_testimonial_box").removeClass("active");
		$(this).addClass("active");
	});
	
	// magnific popup video

	$('.video_play_btn').magnificPopup({
		type:'video'
	});

	// slicknav

	$("#traffic_menu").slicknav({

		prependTo: '#mobile_menu_wrap',
		allowParentLinks: true
	});

  

});


}(jQuery));