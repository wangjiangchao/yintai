$('.foot').load('foot.html');

var num = 0;
var a = 0;
$('.bx61btn').css('background','#ccc').eq(a).css('background','#E5004F')
$('.bx61right').click(function() {
	if(!$('.bx61banin').is(':animated')) {
		num++;
		a++;
		if (a==3) {
			a=0;
		}
		if(num==4) {
			num=1;
			$('.bx61banin').css({
				left:'0px'	
			})			
			
		}
		
		$('.bx61banin').animate({
			left: -num * 850 + 'px'
		})
		
		$('.bx61btn').css('background','#ccc').eq(a).css('background','#E5004F')
		
	}

})

$('.bx61left').click(function() {
	if(!$('.bx61banin').is(':animated')) {
		num--;
		if(num == -1) {
			num = 2;
			$('.bx61banin').css({
				left: '-2550px'
			})
		}
		$('.bx61banin').animate({
			left: -num * 850 + 'px'
		})
		
		$('.bx61btn').css('background','#ccc').eq(num).css('background','#E5004F')
		
	}

})

$('.bx61btn').click(function(){
	
	if(!$('.bx61banin').is(':animated')) {
		$('.bx61banin').animate({
			left: -$(this).index() * 850 + 'px'
		})
		$('.bx61btn').css('background','#ccc').eq($(this).index()).css('background','#E5004F')
		
		num = $(this).index();
	}
	
})


$('.bx61_111').hover(function(){
	$('.bx61_11_1').css('display','none');
	$(this).find('.bx61_11_1').css('display','block')
})

$('.shouye1').click(function(){
	window.location.href = 'index.html'
})
$('.bx52_1').click(function(){
	
	location.href = 'goumai.html';
	
})

$('.top_top_right_yc2').click(function(){
	location.href = 'gerenzhuye.html';
})