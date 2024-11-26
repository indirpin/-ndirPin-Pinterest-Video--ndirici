

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes('pinterest.com/pin/')) {
        chrome.action.setBadgeText({ tabId: tabId, text: '1' });
        chrome.action.setBadgeBackgroundColor({ color: '#00FF00' });
    }
    else{
        chrome.action.setBadgeText({ tabId: tabId, text: '' });
    }
});


chrome.action.onClicked.addListener((tab) => {
    if (tab.url.includes('pinterest.com/pin/')) {
        chrome.action.setBadgeText({ text: "1" });
    } else {
        chrome.action.setBadgeText({ text: "" });
    }
});
