define(["jquery", "cookie"], function($){
	$.ajax({
		type : 'get',
		url : "/html/include/header.html",
		success : function(data){
			var _username = $.cookie("loginUser");
			if (_username) { // 存在登录成功的用户
				$(data).filter(".login_reg")
					   .html(`欢迎你：${_username}`).end()
					   .appendTo(".header");
			} else {
				$(data).appendTo(".header");
			}
		}
	});
});