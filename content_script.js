var postInfo = $("title");
if(postInfo.length<1){
	chrome.runtime.sendMessage({type:"title", error:"没有 title 标签"});
}
else{
	var msg = {
		type: "title",
		title : $("title").text()
	};
	chrome.runtime.sendMessage(msg);
}

