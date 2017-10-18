HomePage = require('../pages/home.page');

describe('Home page testing', function() {
    it('should have a title', function() {
        HomePage.open();
        expect (HomePage.title).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
    });
});