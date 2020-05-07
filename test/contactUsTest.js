beforeEach(function() {
    browser.url('/Contact-Us/contactus.html')
})
describe('Test the contact us form in WebdriverUni -->', () => {
    it('should be able to submit a successful submission via contact us form', function () {
        browser.setValue('[name="first_name"]', 'claudio');
        browser.setValue('[name="last_name"]', 'corr');
        browser.setValue('[name="email"]', 'email@outlook.com');
        browser.setValue('[name="message"', 'This is  a comment');
        browser.click('[type=\'submit\']');

        const thankyouMsg = browser.isExisting('#contact_reply h1')
        expect(thankyouMsg, 'Successful submission message does not exit').to.be.true;

        const sumissionMsg = browser.getText('#contact_reply h1')
        expect(sumissionMsg).to.equal('Thank You for your Message!')
    });
    //no email provided
    it('should  not be able to submit a successful submission via contact us form as all fields are required', function () {
        browser.setValue('[name="first_name"]', 'bob');
        browser.setValue('[name="last_name"]', 'will');
        browser.setValue('[name="email"]', '');
        browser.setValue('[name="message"', 'hello there');
        browser.click('[type=\'submit\']');
    })
    //no comments provided
    it('should not be able to submit a successful submission via contact us form as all fields are required', function () {
        browser.setValue('[name="first_name"]', 'phil');
        browser.setValue('[name="last_name"]', 'pall');
        browser.setValue('[name="email"]', 'email@.com');
        browser.setValue('[name="message"', '');
        browser.click('[type=\'submit\']');
    })
    //no comment & email provided
    it.only('should not be able to submit a successful submission via contact us form as all fields are required', function () {
        browser.setValue('[name="first_name"]', 'claudio');
        browser.setValue('[name="last_name"]', 'corr');
        browser.setValue('[name="email"]', '');
        browser.setValue('[name="message"', '');
        browser.click('[type=\'submit\']');

        //assertion on unsuccessful login message
        const errorTxt = browser.getText('body')
        expect(errorTxt).to.include('Error: all fields are required')

        const errorTxt1 = browser.isVisible('body')
        console.log(errorTxt)
        expect(errorTxt1, 'Error message is not displayed!!').to.be.true
    })
})
