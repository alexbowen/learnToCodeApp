module.exports = function() {
    this.When(/^the chat application is connected$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the user is prompted for a name$/, function (callback) {
        callback.pending();
    });

    this.When(/^the user enters a name$/, function (callback) {
        callback.pending();
    });

    this.Then(/^the user name appears as connected$/, function (callback) {
        callback.pending();
    });
};