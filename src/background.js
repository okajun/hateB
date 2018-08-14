(function() {
    typeof msBrowser != "undefined" ? chrome = msBrowser : typeof browser != "undefined" ? chrome = browser : chrome = null;
     
    chrome.browserAction.onClicked.addListener(function(tab) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            currentTab = tabs[0]
            chrome.tabs.create({
                url: 'http://b.hatena.ne.jp/warenashi/add.confirm?url=' + currentTab.url
            });
        });
    });
})()