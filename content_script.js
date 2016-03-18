var titleInfo = $("title");
if(titleInfo.length<1){
	chrome.runtime.sendMessage({type:"title", error:"没有 title 标签"});
}
else{
	var msg = {
		type: "title",
		title : titleInfo.text()
	};
	chrome.runtime.sendMessage(msg);
}

