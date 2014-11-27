module.exports = function() {
	this.Then(/^title is black (\d+)px tahoma font$/, function (arg1, callback) {

		var expect = this.expect;

		element(by.css('h1')).getCssValue('font-family').then(function (font) {
			expect(font).to.equal('tahoma');
		});

		element(by.css('h1')).getCssValue('font-size').then(function (size) {
			expect(size).to.equal(arg1 + 'px');
		});

		element(by.css('h1')).getCssValue('color').then(function (color) {
			expect(color).to.equal('rgba(255, 255, 255, 1)');
		});

	  	callback();
	});

	this.Then(/^profile title is black (\d+)px tahoma font$/, function (arg1, callback) {
		var expect = this.expect;

		element(by.css('#profile h2')).getCssValue('font-family').then(function (font) {
			expect(font).to.equal('tahoma');
		});

		element(by.css('#profile h2')).getCssValue('font-size').then(function (size) {
			expect(size).to.equal(arg1 + 'px');
		});

		element(by.css('#profile h2')).getCssValue('color').then(function (color) {
			expect(color).to.equal('rgba(255, 255, 255, 1)');
		});

	  	callback();
	});

	this.Then(/^chat title is black (\d+)px tahoma font$/, function (arg1, callback) {
		var expect = this.expect;

		element(by.css('#chat h2')).getCssValue('font-family').then(function (font) {
			expect(font).to.equal('tahoma');
		});

		element(by.css('#chat h2')).getCssValue('font-size').then(function (size) {
			expect(size).to.equal(arg1 + 'px');
		});

		element(by.css('#chat h2')).getCssValue('color').then(function (color) {
			expect(color).to.equal('rgba(255, 255, 255, 1)');
		});

	  	callback();
	});
};