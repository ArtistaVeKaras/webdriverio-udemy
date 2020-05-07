beforeEach(function() {
    browser.url('./')
})
describe('Verify whether webdriveruniversity link on homepage work correctly',() =>{
    it('check the contact us button opens the contact us page' , () => {
        const title1 = browser.getTitle();
        assert.equal(title1, 'WebDriverUniversity.com')
        console.log('Title is: ' + title1);

        //switching tabs and close the browser
        browser.click('#contact-us');
        const tabId = browser.getTabIds();
        console.log(tabId);

        //switching tabs
        browser.switchTab(tabId[1]);
        browser.close()
    });
    it.only('check that the login button opens the login portal page', () => {
        browser.click('#login-portal')

        //printing tabs
        const tab2 = browser.getTabIds();
        console.log(tab2);

        //switching tabs
        browser.switchTab(tab2[1]);
        const title = browser.getTitle();
        console.log(title);
        assert.equal(title, 'WebDriver | Login Portal')

        const url = browser.getUrl();
        assert.equal(url, 'https://www.webdriveruniversity.com/Login-Portal/index.html', 'URL Mismatch');
        console.log(url);
    });
});