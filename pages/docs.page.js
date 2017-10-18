"use strict";
const TECHNIQUES_BUTTON_TITLE = 'Techniques for putting Angular to work in your environment';

class DocsPage {

    get techniquesButton() {
        return $("[title='Techniques for putting Angular to work in your environment']").click()
    }

    get upgradingButton() {
        return $("[title='Incrementally upgrade an AngularJS application to Angular.']").click()
    }

    get upgradeCheatsheetButton() {
        return $("[title='Learn how AngularJS concepts and techniques map to Angular.']").click()
    }

    get quickReferencePageTitle() {
        return $('#angularjs-to-angular-quick-reference').getAttribute('tagName');
    }

    open() {browser.get('https://angular.io/docs')}

}
module.exports = new DocsPage;