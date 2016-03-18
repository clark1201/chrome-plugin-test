function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
  if(getDomainFromUrl(tab.url) != '')
	  chrome.pageAction.show(tabId);
};

chrome.tabs.onUpdated.addListener(checkForValidUrl);

var sxData = {};
sxData.error = "加载中...";
chrome.runtime.onMessage.addListener(function(request, sender, sendRequest){
	if(request.type!=="title")
		return;
	sxData = request;
	sxData.firstAccess = "获取中...";
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  chrome.tabs.getSelected(null, function(tab) {
    var tabId = tab.id;
	  var code = '$("body").css("background","'+request.colorVal+'")'
	  chrome.tabs.executeScript(tabId,{code : code});
  });
  
});
