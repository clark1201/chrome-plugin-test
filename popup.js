document.addEventListener('DOMContentLoaded', function () {
	// windows 对象
	var data = chrome.extension.getBackgroundPage().sxData;
	if(data.error){
		$("#message").text(data.error);
		$("#content").hide();
	}else{
		$("#message").hide();
		$("#content-title").text(data.title);
	}
});

$('#changeColor').on('click', function(){
	var colorVal = $('#colorVal').val();

	var msg = {
		title : 'text',
		colorVal : colorVal
	};
	chrome.extension.sendRequest(msg);

});
