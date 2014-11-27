module.exports = function() {
    this.World = function World(callback) {

        var chai = require('chai');
        this.expect = chai.expect;

        this.ptor = protractor.getInstance();
        this.ptor.ignoreSynchronization = true;
        
        callback();
    }
};
