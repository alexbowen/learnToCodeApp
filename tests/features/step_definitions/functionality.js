module.exports = function() {
    this.When(/^the chat application is connected$/, function (callback) {
        browser.executeScript('return window.chatApp.connected();');
        callback();
    });

    this.Then(/^the user is prompted for a name$/, function (callback) {
        var expect = this.expect;

        element(by.id('status')).getText().then(function(text) {
            expect(text).to.equal('Choose name:');
            callback();
        });
    });

    this.When(/^the user sends an empty message$/, function (callback) {
        element(by.id('chat-input')).sendKeys('');
        element(by.id('chat-input')).sendKeys(protractor.Key.ENTER);
        callback();
    });

    this.Then(/^the message is not sent$/, function (callback) {
    	callback.pending();
    });
};