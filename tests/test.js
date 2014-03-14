describe("Page Loading", function () {
    
    var logo = document.getElementById('loading-text');
    it("loading logo is in the DOM", function () {
        expect(logo).to.not.equal(null);
    });

    var titlebar = document.getElementById('afa-loading-titlebar');
    it("loading title bar is in the DOM", function () {
        expect(titlebar).to.not.equal(null);
    });
});
