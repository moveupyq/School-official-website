window.onload = function(){
    //点击选项卡，使得面包屑导航的字发生改变
    $("#list-tab").find("a").click(function(){
    	// console.log(1);
    	$(".breadcrumb").find("li.changeName_li").text($(this).text());
    })
	
	//跳转到指定的位置
	let url = window.location.href;
	// console.log(url);
	let aaa =new RegExp(/tid=\d*/);
	let news_id = url.match(aaa);
	if(news_id==null){
		
	}else{
		news_id = news_id[0];
		// console.log(news_id);
		let num =  news_id.split("=")[1];
		// console.log(num); 	
		$("#list-tab").find("a").eq(num).trigger("click");
		
	}


	
	
	
	
}
