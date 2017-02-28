var sj = localStorage.getItem(111);
var mz = JSON.parse(sj);
var lsj = $('.top_top_right_li1').html();
if (sj!="") {
	var tc = $("<span class='tcbtn'>退出</span>");
	$('.top_top_right_li1').text("Hi  ,  "+ mz.name1).css('text-align','right').append(tc);
	$('.tcbtn').css('margin-left','10px');
	
	$('.tcbtn').click(function(){
		$('.top_top_right_li1').html(lsj);
	})
	
}
