(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});



		var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

	    var hamburgers = document.querySelectorAll(".hamburger");
	    if (hamburgers.length > 0) {
	      forEach(hamburgers, function(hamburger) {
	        hamburger.addEventListener("click", function() {
	          this.classList.toggle("is-active");
	        }, false);
	      });
	    }

	    new WOW().init();

	    $("#owl-csel1").owlCarousel({
			items: 3,
			autoplay: true,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: true,
			nav: true,
			navContainer: '.main-content .custom-nav',
			responsive:{
				0: {
					items: 2,						
				},
				767: {
					items: 3,						
				},
				1200: {
					items: 3,						
				}
			}


		});


		$("#owl-csel-2").owlCarousel({
			items: 1,
			autoplay: false,
			autoplayTimeout: 3000,
			startPosition: 0,
			rtl: false,
			loop: true,
			margin: 15,
			dots: false,
			nav: true,
			navText: [
					'<i class="fa fa-angle-left" aria-hidden="true"></i>',
					'<i class="fa fa-angle-right" aria-hidden="true"></i>'
				],
			navContainer: '.main-content-2 .custom-nav',
			responsive:{
				0: {
					items: 1,						
				},
				767: {
					items: 1,						
				},
				1200: {
					items: 1,						
				}
			}

		});

		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			
			if (scroll >= 15) {
			$(".header-area").addClass("headerfixed");
			} else {
			$(".header-area").removeClass("headerfixed");
			}
		});

		$(".about").click(function() {
			$("html, body").animate({ scrollTop: $("#about").offset().top }, 400);
		});

		$(".services").click(function() {
			$("html, body").animate({ scrollTop: $("#services").offset().top }, 400);
		});

		$(".approach").click(function() {
			$("html, body").animate({ scrollTop: $("#approach").offset().top }, 400);
		});

		$(".contact").click(function() {
			$("html, body").animate({ scrollTop: $("#contact").offset().top }, 400);
		});

		$(".portfolio").click(function() {
			$("html, body").animate({ scrollTop: $("#portfolio").offset().top }, 400);
		});

		jQuery('.tabs .tab-links a').on('click', function(e)  {
			var currentAttrValue = jQuery(this).attr('href'); 
			// Show/Hide Tabs
			// Show/Hide Tabs
		jQuery('.tabs ' + currentAttrValue).siblings().hide();
		jQuery('.tabs ' + currentAttrValue).delay(400).show();             
			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
			e.preventDefault();
		});

		$('.moreless-button').click(function() {
			$('.moretext').slideToggle();
			if ($('.moreless-button').text() === "Read More ...") {
			  $(this).text("Read less");
			} else {
			  $(this).text("Read More ...");
			}
		  });
				
	
		
		
	});
})(jQuery);