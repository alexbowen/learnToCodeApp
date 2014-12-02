module.exports = function() {
  this.Then(/^i see a header section$/, function (callback) {

    var expect = this.expect;

    element(by.css('header')).isPresent().then(function (present) {
        expect(present).to.equal(true);
        callback();
    });
  });

  this.Then(/^i see a profile section$/, function (callback) {

    var expect = this.expect;

    element(by.css('#profile')).isPresent().then(function (present) {
        expect(present).to.equal(true);
        callback();
    });
  });

  this.Then(/^i see a chat section$/, function (callback) {

    var expect = this.expect;

    element(by.css('#chat')).isPresent().then(function (present) {
        expect(present).to.equal(true);
        callback();
    });
  });

  this.Then(/^i see a footer section$/, function (callback) {

    var expect = this.expect;

    element(by.css('footer')).isPresent().then(function (present) {
        expect(present).to.equal(true);
        callback();
    });
  });

  this.Then(/^i see correct title in header$/, function (callback) {
    
    var expect = this.expect;

    element(by.css('header h1')).getText().then(function(text) {
      expect(text).to.equal('Chat Application');
      callback();
    });
  });
}