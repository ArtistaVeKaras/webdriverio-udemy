const expect = require('chai').expect
const should = require('chai').should

describe('Verify whether webdriveruniversity link on homepage work correctly',() =>{
    it('check the contact us button opens the contact us page' , () => {
        browser.url('/')
        const title1 = browser.getTitle();
        expect(title1).to.equal('WebDriverUniversity.com')
        browser.click('#contact-us');
        console.log('Title is: ' + title1);
    });
    it('check that the login button opens the login portal page', () => {
        browser.url('/')
        browser.click('#login-portal')
        const title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com')
        console.log('Title is: ' + title);
    });
});