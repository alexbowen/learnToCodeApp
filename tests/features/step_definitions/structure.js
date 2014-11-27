module.exports = function() {
  this.Given(/^I go to the web application$/, function (callback) {
    this.ptor.get('http://localhost:8000');
    callback();
  });

  this.Then(/^i see a header section$/, function (callback) {
    this.expect(element(by.css('header'))).to.exist;
    callback();
  });

  this.Then(/^i see a profile section$/, function (callback) {
    this.expect(element(by.css('#profile'))).to.exist;
    callback();
  });

  this.Then(/^i see a chat section$/, function (callback) {
    this.expect(element(by.id('chat'))).to.exist;
    callback();
  });

  this.Then(/^i see a footer section$/, function (callback) {
    this.expect(element(by.css('footer'))).to.exist;
    callback();
  });

  this.Then(/^i see correct title in header$/, function (callback) {
    var expect = this.expect;

    element(by.css('header h1')).getText().then(function(text) {
      expect(text).to.equal('Chat Application');
      callback();
    });
  });
}