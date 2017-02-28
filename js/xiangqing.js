$('.header').load('head.html');
$('.foot').load('foot.html');
/*上下的图片互动*/
var arr = ["img/z1.jpg","img/z2.jpg","img/z3.jpg","img/z4.jpg","img/z5.jpg","img/z6.jpg","img/z7.jpg","img/z8.jpg"]

$('.box1_1 li').mouseenter(function(){
	
	$('.box img').attr('src',arr[$(this).index()]);
	$('.fangda img').attr('src',arr[$(this).index()]);
	
})

/*商品展示的轮播*/
var num = 0;
$('.box_right').click(function(){
	
	if (!$('.box1_1').is(':animated')) {
		num ++ ;
		if (num == 8) {
			num =7;
		}
		$('.box1_1').animate({
			left:-num*67 + 'px'
		})
		
	}
	
})

$('.box_left').click(function(){
	
	if (!$('.box1_1').is(':animated')) {
		num -- ;
		if (num == -1) {
			num =0;
		}
		$('.box1_1').animate({
			left:-num*67 + 'px'
		})
	}
})

/*放大镜*/

$('.box').mousemove(function(e){
	var x = e.pageX;
	var y = e.pageY;
	
	
	var x1 = $('.box').offset().left;
	var y1 = $('.box').offset().top;
	
	var x2 = x-x1-75;
	var y2 = y-y1-75;

	if (y2<0) {
		y2 = 0
	}
	if (y2>250) {
		y2 = 250;
	}
	if (x2<0) {
		x2=0;
	}
	if (x2>150) {
		x2=150;
	}
	$('.xkuai').css({
		left:x2,
		top:y2,
	})
	
	var x3 = -(x2/300)*400;
	var y3 = -(y2/300)*400;
	$('.fangdah').css({
		left:x3,
		top:y3,
	})
})
$('.box').hover(function(){
	$('.xkuai').css('display','block');
	$('.fangda').css('display','block');
},function(){
	$('.xkuai').css('display','none');
	$('.fangda').css('display','none');
})

/*添加商品数量*/
$('.syjs').addClass('ysxs');
$('.main_l1_11').click(function(){
	$('.main_l1_11').css('background','#999');
	$(this).css('background','#B7AB91');
	
})
$('.tb1').click(function(){
	$('.main_l1>div').removeClass('ysxs');
	$('.syjs').addClass('ysxs');
})

$('.tb2').click(function(){
	$('.main_l1>div').removeClass('ysxs');
	
	$('.sppj').addClass('ysxs');
})

$('.tb3').click(function(){
	$('.main_l1>div').removeClass('ysxs');
	
	$('.spzx').addClass('ysxs');
})

$('.tb5').click(function(){
	$('.main_l1>div').removeClass('ysxs');	
	$('.gmxz').addClass('ysxs');
})

/*选择那部分的*/
$('.xzys1').click(function(){
	$('.xzys1').removeClass('xuanzej').children().css('display','none');
	$(this).addClass('xuanzej').children().css('display','block');
})

$('.cmsm1').click(function(){
	$('.cmsm1').removeClass('xuanzej').children().css('display','none');
	$(this).addClass('xuanzej').children().css('display','block');
})

/*点击增加数量的那块*/

var nums = 1;
$('.jias3').click(function(){
	nums++;
	$('.jias1').text(nums);
})
$('.jias4').click(function(){
	if (nums<=1) {
		nums=1
	}else{
		nums--;
	}
	
	$('.jias1').text(nums);
})