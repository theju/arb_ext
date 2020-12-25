browser.browserAction.onClicked.addListener(function(tab, data) {
    browser.tabs.create({
        active: true,
        url: 'ext.html',
    })
});
