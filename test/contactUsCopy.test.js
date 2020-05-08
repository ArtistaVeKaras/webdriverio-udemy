const request = require('sync-request');

beforeEach(function() {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test the contact us form WebdriverUni -->', () => {
    const res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
    const contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

    //declaring variables
    const firstNameSelector = "[name='first_name']";
    const lastNameSelector = "[name='last_name']";
    const emailSelector = "[name='email']";
    const commentSelector = "[name='message']";
    const submitBtnSelector = "input[value='SUBMIT']";
    const successfulSubmissionSelector = "#contact_reply h1";
    const unsuccessfulSubmissionSelector = "body";

    function setFirstName(firstName) {
        return browser.setValue(firstNameSelector, firstName)
    }

    function setLastName(lastName) {
        return browser.setValue(lastNameSelector, lastName)
    }

    function setEmail(email) {
        return browser.setValue(emailSelector, email)
    }

    function setComment(comment) {
        return browser.setValue(commentSelector, comment)
    }

    function clickSubmitBtn() {
        return browser.click(submitBtnSelector)
    }

    function confirmSuccessfulSubmission() {
        const validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(successfulSubmissionSelector) === 'Thank You for Message!'
        }, 3000);
        expect(validateSubmissionHeader, 'Successfully Submission message does not exist').to.be.true
    }

    function confirmUnuccessfulSubmission() {
        const validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(unsuccessfulSubmissionSelector) === 'Error: all fields are required'
        }, 3000);
        expect(browser.getText(unsuccessfulSubmissionSelector)).to.include('Error: all fields are required');
    }

    //TODO: investigate this test case
    contactUsDetails.forEach( function (contactDetails) {
        it('should be able to submit a successful submission via contact us form', function (done) {
            setFirstName('Clau')
            setLastName(contactDetails.name);
            setEmail(contactDetails.email);
            setComment(contactDetails.body);
            clickSubmitBtn()
            confirmSuccessfulSubmission();
        });
    });

    //no field provided
    it('should  not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setFirstName('bob');
        setLastName('Mars');
        setEmail('bob@email.com');
        clickSubmitBtn();
        confirmUnuccessfulSubmission();
    });

    //no comments & email provided
    it('should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setLastName('lara');
        setLastName('phil');
        clickSubmitBtn();
        confirmUnuccessfulSubmission();
    });

    //no comment & email provided
    it('should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setLastName('Sara');
        setEmail('sa@outlook.com');
        clickSubmitBtn();
        confirmUnuccessfulSubmission();
    });
})
