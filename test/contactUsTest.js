beforeEach(function() {
    browser.url('/Contact-Us/contactus.html')
})
describe('Test the contact us form in WebdriverUni', () => {
    it('should be able to submit a successful submission via contact us form', function () {
        browser.setValue('[name="first_name"]', 'claudio');
        browser.setValue('[name="last_name"]', 'corr');
        browser.setValue('[name="email"]', 'email@.com');
        browser.setValue('[name="message"', 'This is  a comment');
        browser.click('[type=\'submit\']');
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
    it('should not be able to submit a successful submission via contact us form as all fields are required', function () {
        browser.setValue('[name="first_name"]', 'claudio');
        browser.setValue('[name="last_name"]', 'corr');
        browser.setValue('[name="email"]', '');
        browser.setValue('[name="message"', '');
        browser.click('[type=\'submit\']');
    })
})
