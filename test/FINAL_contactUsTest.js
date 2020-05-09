const ContactUs_Page = require('../pageObject/ContactUs_Page.js')

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
  it('Should be able to submit a successful submission via contact us form', function(done) {
	  ContactUs_Page.submitAllInformationViaContactUsForm('joe' , 'corr', 'bob@gmail.com', 'This is s comment');
   });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setFirstName('Mike');
  	ContactUs_Page.setLastName('Woods');
  	ContactUs_Page.setEmailAddress('mike_woods@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setFirstName('Sarah');
  	ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  	ContactUs_Page.setLastName('Jo');
  	ContactUs_Page.clickSubmitButton();
  	ContactUs_Page.confirmUnsuccessfulSubmission();
    });
});