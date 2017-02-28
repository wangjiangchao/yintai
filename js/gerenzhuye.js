$('.header').load('head.html');
$('.foot').load('foot.html');

var arrs=[];
$('.main_lt3').each(function(i){
	arrs[i]=$(this).find('.main_lt32').css('background-position-y');
})
$('.main_lt3').click(function(){
	
	var aa = $(this).next();
	if ( aa.css("display") == 'none' ) {
		$('.main_lt3_1').slideUp();
		$('.main_lt3').find('.aaa').removeClass('ccc');
		$(this).find('.aaa').addClass('ccc');
		$(this).next().slideDown();
	}	
	/*后面的小加号*/
	$('.main_lt31').removeClass('ddd');
	$(this).find('.main_lt31').addClass('ddd');
	/*前面的那个背景*/	
	$('.main_lt3').find('.main_lt32').each(function(i){
		$(this).css('background-position-y',arrs[i]);
	})
	var adc =$(this).find('.main_lt32').css('background-position-y');
	var ddc = parseInt(adc)-21;
	$(this).find('.main_lt32').css('background-position-y',ddc+'px');
})


$('.xgmim').click(function(){
	$('.main_rt').css('display','none');
	$('.xgmm').css('display','block');
})
$('.main_lt1').click(function(){
	$('.xgmm').css('display','none');
	$('.main_rt').css('display','block');
	
})


$('.sjhm').focusout(function(){
	var sjhm = $(this).val();
	var sj = localStorage.getItem('111');
	var sj1 = JSON.parse(sj);
	if (sjhm!=sj1.name1) {
		$('.cutss1').text('不存在该用户名！').addClass('few');
	}else{
		$('.cutss1').text('请填写当前绑定的手机号码。').removeClass('few');
		
	}
})

$('.qxmm').focusout(function(){
	var xmm = $('.xmm').val();
	var qxmm = $('.qxmm').val();
	if (qxmm!=xmm) {
		$('.xuts11').text('请检查两次输入的密码是否相同！').addClass('few');
	}else{
		$('.xuts11').text('请再次输入密码。').removeClass('few');		
	}
	
})

$('.xgmbtn').click(function(){
	
	var obj = new Object();
		obj.name1 = $('.sjhm').val();
		obj.mima = $('.xmm').val();
	var data = JSON.stringify(obj);
	
	localStorage.setItem(obj.name1,data);
	
		if (obj.name1!="" && obj.mima!="" && obj.mima==$('.qxmm').val()) {
			$('.mb').css('display','block');
			
			setTimeout(function(){
				$('.mb').css('display','none');
				
				$('.xgmm').css('display','none');
				$('.main_rt').css('display','block');
			},1000)
		}else{
			alert('请完善信息');
		}
	
})
