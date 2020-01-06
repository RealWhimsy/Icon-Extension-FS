
var iframe = document.createElement('iframe');
iframe.src = chrome.extension.getURL ("background/background.html");

document.body.insertBefore(iframe, document.body.firstChild);