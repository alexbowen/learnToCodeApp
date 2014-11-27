module.exports = function() {
  this.Given(/^I go to the web application$/, function (callback) {
    this.ptor.get('http://localhost:8000');
    callback();
  });
};
