$(function(){


	//magnificPopup JS
	$('#work .row a').magnificPopup({
			  type: 'image',
			  gallery:{
			    enabled:true
			  }
			});


	// circle-progress JS
	$('.first.circle').circleProgress({
				value: 0.75,
				size: 100
			}).on('circle-animation-progress', function(event, progress) {
   			$(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
			});	

			$('.second.circle').circleProgress({
				value: 0.9,
				size: 100
			}).on('circle-animation-progress', function(event, progress) {
   			$(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
			});	

	//jarallax JS
	var	parallaxItem = $('#banner1, #banner2, #video');

	parallaxItem.jarallax({
			speed: 0.5
		});

		

  // bxslider JS
  $('.bxslider').bxSlider({
		minSlides : 5,				// 최소 슬라이드 갯수
		maxSlides : 5,				// 최대 슬라이드 갯수
		slideWidth : 210,			// 슬라이드 폭
		slideMargin : 10,			// 슬라이드 사이 간격
		moveSlides : 1,				// 슬라이드 움직이는 갯수
		auto : true,					// 자동플레이
		pager : true,				// Dot Pager 보이고 감추기
		controls : false				// 좌우버튼 보이고 감추기
	});

	//WOW JS
	new WOW().init();

	//Mobile Gnb Toggle 설정
	var mobileMenu = $('gnb');

	mobileMenu.mouseleave(function(){
		$(this).animate({'height': 0}, 800, function(){
			$(this).removeClass('in');
		});
	});	

});