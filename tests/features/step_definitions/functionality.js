module.exports = function() {
    this.When(/^the chat application is connected$/, function (callback) {
        browser.executeScript('return window.chatApp.connected();');
        callback();
    });

    this.Then(/^the user is prompted for a name$/, function (callback) {
        var expect = this.expect;

        element(by.css('#status')).getText().then(function(text) {
            expect(text).to.equal('Choose name:');
            callback();
        });
    });

    this.When(/^the user enters a name$/, function (callback) {
        element(by.css('#chat-input')).sendKeys('Alex').then(function () {
            element(by.css('#chat-input')).sendKeys(protractor.Key.ENTER).then(callback);
        });
    });

    this.Then(/^the user name appears as connected$/, function (callback) {
        var expect = this.expect;

        this.ptor.sleep(1000);

        element(by.css('#status')).getText().then(function(text) {
            expect(text).to.equal('Alex: connected');
            callback();
        });
    });
};