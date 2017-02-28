var num = 0;
var t = setInterval(timer, 2000);
var arr = ['img/banner4.jpg', 'img/banner6.jpg', 'img/banner5.jpg']

function timer() {

	num++;
	if(num == 3) {
		num = 0;
	}

	$('.banimg').css('display', 'none').eq(num).show();
	$('.bj img').attr('src', arr[num]);
	$('.btn div').css('background', '#000000').eq(num).css('background', 'indianred')
}

$('.btn div').hover(function(e) {
	e.preventDefault();
	clearInterval(t);
	$('.banimg').css('display', 'none').eq($(this).index()).show();
	$('.bj img').attr('src', arr[$(this).index()]);
	$('.btn div').css('background', '#000000').eq($(this).index()).css('background', 'indianred')

}, function() {
	num = $(this).index();
})

$('.banner').hover(function() {
	clearInterval(t);
}, function() {
	clearInterval(t);
	t = setInterval(timer, 2000);
})

$('.right').click(function() {
	timer();

})

$('.left').click(function() {
	num--;
	if(num == -1) {
		num = 2;
	}

	$('.banimg').css('display', 'none').eq(num).show();
	$('.bj img').attr('src', arr[num]);
	$('.btn div').css('background', '#000000').eq(num).css('background', 'indianred')
})

$('.main_one_left_top>li').hover(function() {
	$('.main_one_left_top>li').css('borderColor', '#333333').eq($(this).index()).css('borderColor', '#E5004F');
	$('.xiaokuai').css('border-bottom-color', '#333333').eq($(this).index()).css('border-bottom-color', '#E5004F');
	$('.xiala1').css('display', 'none').eq($(this).index()).css('display', 'block')
}, function() {

})

$('.remenpp').hover(function() {
	$('.remenpp').css('borderColor', '#333333').eq($(this).index()).css('borderColor', '#E5004F');
	$('.sanjiao').css('border-bottom-color', '#333333').eq($(this).index()).css('border-bottom-color', '#E5004F');
	$('.remenpp_in').css('display', 'none').eq($(this).index()).css('display', 'block')
}, function() {

})

var num1 = 0;
$('.btnright').click(function() {
	num1++;
	if(num1 == 3) {
		num1 = 0;
		$(this).prev().prev().css('left', 0 + 'px')
	}
	$(this).prev().prev().css('left', -num1 * 200 + 'px')
})

$('.btnleft').click(function() {
	num1--;
	if(num1 == -1) {
		num1 = 2;
		$(this).prev().css('left', '-600px')
	}
	$(this).prev().css('left', -num1 * 200 + 'px')
})
/*小轮播那块*/
var num2 = 0;
$('.btnright2').click(function() {
	num2++;
	if(num2 == 2) {
		num2 = 1;
		$(this).prev().prev().css('left', 390 + 'px')
	}
	$(this).prev().prev().css('left', -num2 * 390 + 'px');
	$(this).next().children().css('background','#CCCCCC').eq(1).css('background','#63A35C');
})

$('.btnleft2').click(function() {
	num2--;
	if(num2 == -1) {
		num2 = 0;
		$(this).prev().css('left', '-390px')
	}
	$(this).prev().css('left', -num2 * 390 + 'px');
	$(this).next().next().children().css('background','#CCCCCC').eq(0).css('background','#63A35C');	
})

$('.btndian1').click(function() {
	$(this).siblings('.btndian1').css('background','#CCCCCC');
	$(this).css('background','#63A35C').parent().prev().prev().prev().css('left', -$(this).index() * 390 + 'px')

})

$('.foot').load('foot.html');
$('.header').load('head.html');


$('.limian').hover(function() {
			
			$(this).addClass('ys4');

		}, function() {
			
			$(this).removeClass('ys4');

		})

$(document).scroll(function(e){
	
	var tt = $(this).scrollTop();
	
	if (tt>700) {
		$('.louti').slideDown(300);
	}else{
		$('.louti').slideUp(300)
	}
	
	$('.mian_3').each(function(i, obj) {

				var dtop = $(obj).offset().top;

				if(tt+100 >= dtop) {									
				
				$('.limian').css('display','none').eq(i).css('display','block');
				}
				

			})
	
})
$('.louti>div').click(function(){
		
		var num = $(this).index();
		if(num==9){
			$('body,html').animate({
				scrollTop: 0
			})
		}
		var tops = $('.mian_3').eq(num).offset().top ;

			$('body,html').animate({
				scrollTop: tops
		})
		
})

