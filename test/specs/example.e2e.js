const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const DynamicLoadingPage = require('../pageobjects/dynamic_loading.page');


describe('My Dynamic Loading Page', () => {
    it('should verify that start button exists', async () => {
        await DynamicLoadingPage.open('dynamic_loading/1');

        await expect(DynamicLoadingPage.startButton).toBeExisting();
        await browser.saveScreenshot('./screenshot/screenshot.png');
        
    });
     it('click', async () => {
        await DynamicLoadingPage.open('dynamic_loading/1');
        await DynamicLoadingPage.startClick()
        await DynamicLoadingPage.startButton.waitForDisplayed({ timeout: 5000, reverse : true });
        await expect(DynamicLoadingPage.htest).toBeDisplayed();
        await browser.saveScreenshot('./screenshot/screenshot2.png');
    });
});


