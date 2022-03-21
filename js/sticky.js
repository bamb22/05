$(function(){

	// 상단 네비게이션 고정
	$(window).scroll(function(){

		var scrollPos = $(window).scrollTop();

		if(scrollPos>20){
			$('#navi').addClass('fixed');
		}else{
			$('#navi').removeClass('fixed');
		}

	});


	// 상단 네비게이션 스크롤 이동
	var menuItem = $('#navi .navbar-header h1 a, #gnb a');

	menuItem.click(function(){
		var el = $(this).attr('href');
		var elWrap = $(el);
		// console.log(el);

		scrollToDiv(elWrap, 50);
	});


	// 상단 네비게이션 스크롤 이동 함수
	function scrollToDiv(element, navHeight){
		
		var offset = element.offset().top;		
		var totalScroll = offset - navHeight;

		$('html, body').animate({scrollTop: totalScroll}, 600);
	}


});

