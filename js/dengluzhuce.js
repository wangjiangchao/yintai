$('.foot').load('foot.html');
$('.qiehuan').click(function(){
	$('.huzhao').css('display','none').eq($(this).index('.qiehuan')).css('display','block')
})

/*注册页面*/


$('.zhuce5').click(function(){
	

	
	
	var obj = new Object();
	obj.name1 = $('.shoujihao').val();
	obj.mima = $('.ytmima').val();
		
	var data = JSON.stringify(obj);
	
	localStorage.setItem(obj.name1,data);
	
	if (obj.name1=="") {
		alert('请输入手机号');
	}
	if(obj.mima ==""){
		alert('请输入密码');
	}
	if(obj.mimaqr==""){
		alert('请再次验证密码');
	}
	if(obj.mima!=$('.ytmaqr').val()){
		alert('请再次验证密码');
	}
	
	if (obj.name1=="" || obj.mima =="" || obj.mimaqr=="" || obj.mima!=$('.ytmaqr').val()) {
		alert('请完善注册信息');
	} else{
		$('.zccgts').css('display','block');
		setTimeout(function(){
			window.location.href='denglu.html';
		},2000)
		
	}
		
		
	
	
})

/*登录页面*/

$('.denglubtn').click(function(){
	var shuju = $('.dlzh').val();
	
	var shuju2 = localStorage.getItem(shuju);
	
	console.log(shuju2);
	
	var obj = JSON.parse(shuju2);
	var dlmm = $('.dlmm').val();
	
	if (shuju!=111) {
		alert('不存在该账户');
	}
	if (dlmm!=obj.mima) {
		alert('密码不正确');
	}else{
		window.location.href='index.html';
	}
	
})