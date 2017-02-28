$('.foot').load('foot.html');

$('.djc').click(function(){
	if (!$(this).next().is(':animated')) {
		$(this).next().slideToggle();
		$(this).find('.bx91_k').toggleClass('djczz')
	}
	
	
})


$('.shrxx').focusout(function(){
	var shrxx = $('.shrxx').val();
	if (shrxx!=""){
		$('.sqjd1').text('');
	}	
})


$('.bx2_3_32').focusout(function(){
	var shrxx1 = $('.bx2_3_32').val();
	if (shrxx1!=""){
		$('.sqjd2').text('');
	}	
})

$('.top_top_right_yc2').click(function(){
	location.href = 'gerenzhuye.html';
})

$('.tdsy').click(function(){
	location.href = 'index.html';
})