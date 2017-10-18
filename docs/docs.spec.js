DocsPage = require('../pages/docs.page');

describe('Docs page testing', function () {
    it('should open Quick Reference Page', function () {
        DocsPage.open();
        DocsPage.techniquesButton
            .then(() => DocsPage.upgradingButton)
            .then(() => DocsPage.upgradeCheatsheetButton)
            .then(() => expect(DocsPage.quickReferencePageTitle).toEqual('H1'))
    });
});