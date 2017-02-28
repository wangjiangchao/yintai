$('.header').load('head.html');
$('.foot').load('foot.html');

$('.diyihang_center1').mouseenter(function(){
	
	var aa = $(this).find('img').attr('src');
	$(this).parent().prev().find('img').attr('src',aa);
})

$(document).scroll(function(){
	var t = $(document).scrollTop();
	if (t>450) {
		$('.xiding').addClass('xd');
	}else{
		$('.xiding').removeClass('xd');
	}
})