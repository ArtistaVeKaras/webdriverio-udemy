const request = require('request');

browser.addCommand("sumbmitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments) {
    if (firstName) {
        browser.setValue('[name="first_name"]',firstName)
    }
    if (lastName) {
        browser.setValue('[name="last_name"]', lastName)
    }
    if (emailAddress) {
        browser.setValue('[name="email"]',emailAddress)
    }
    if (comments) {
        browser.setValue('[name="message"]',comments)
    }
    browser.click('[type=\'submit\']');
})
beforeEach(function() {
    browser.url('/Contact-Us/contactus.html')
})
//TODO: investigate the erro for this test
describe('Test the contact us form in WebdriverUni -->', () => {
    // const res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
    // const contactUsDetails = JSON.parse(res.body().toString('utf8'));

    // contactUsDetails.forEach( function (contactDetails) {
    it('should be able to submit a successful submission via contact us form', function () {
        browser.setValue('[name="first_name"]', 'claudio');
        browser.setValue('[name="last_name"]', 'corr');
        browser.setValue('[name="email"]', contactDetails.email);
        browser.setValue('[name="message"', contactDetails.body);
        browser.click('[type=\'submit\']');

        const thankyouMsg = browser.isExisting('#contact_reply h1')
        expect(thankyouMsg, 'Successful submission message does not exit').to.be.true;

        const sumissionMsg = browser.getText('#contact_reply h1')
        expect(sumissionMsg).to.equal('Thank You for your Message!')
    })
});
//no email provided
it.only('should  not be able to submit a successful submission via contact us form as all fields are required', function () {
// .sumbmitDataViaContactUsForm('Cla', 'corr','emai@outlook.com', '')
    // browser.click('[type=\'submit\']');
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

    //assertion on unsuccessful login message
    const errorTxt = browser.getText('body')
    expect(errorTxt).to.include('Error: all fields are required')

    const errorTxt1 = browser.isVisible('body')
    console.log(errorTxt)
    expect(errorTxt1, 'Error message is not displayed!!').to.be.true
})
