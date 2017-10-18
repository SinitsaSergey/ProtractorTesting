"use strict";
class HomePage {

    get title() {
        return $('title').getAttribute('text');
    }
    open() {browser.get('https://angularjs.org/')}

}
module.exports = new HomePage;