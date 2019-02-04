$(document).ready(function(){

	$('section.folio .btn1').click(function(){

		$('section.folio div.folio_div p:nth-of-type(1)').show();
		$('section.folio div.folio_div p:nth-of-type(2)').hide();




	})

	$('section.folio .btn2').click(function(){

		$('section.folio div.folio_div p:nth-of-type(2)').show();
		$('section.folio div.folio_div p:nth-of-type(1)').hide();

	})

	/* $('section.folio .btn3').click(function(){

		$('html , body').animate({

			scrollTop : 0
		},1500)


	}) */

	

	$(window).scroll(function(){

		var scroll = $(this).scrollTop();

		if(scroll > 400)
		{
			$('.new-header').slideDown();
		}
		else
		{
			$('.new-header').slideUp();

		}



	});

		$('.fancybox').fancybox();


		$('.accordion .one').css('display','block');

		$('.accordion h3').click(function(){

			$(this).next().slideToggle();
			$('.accordion p').not($(this).next()).slideUp();



		})

		$(window).scroll(function(){


		var scroll = $('.study').offset().top;
		var x = $('html , body').scrollTop();
		
			
			
		if( x > scroll )
			
		{

		$('.timer').countTo();

		}
		
	});

		 $('.all-images').mixItUp();

		// $('html').niceScroll();

		$('section.conrad li a').click(function()
		{
			$('html , body').animate({
				scrollTop : $('#'+ $(this).data('li')).offset().top



			},1500)
		})
		$('footer .footer a').click(function(){

			$('html , body').animate({
				scrollTop : 0

		},1500)
		})
		





});