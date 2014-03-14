describe("Chat Application", function () {

    var title = $('h1').text();

    var profile = $('#profile');

    it("has correct title", function () {
        expect(title).to.equal('Chat Application');
    });

    it("has profile section", function () {
        expect(profile).to.be.a('object');
    });
});