const ContactUs_Page = require('../pageObject/ContactUs_Page.js')

beforeEach( async () => {
	browser.url('/Contact-Us/contactus.html');
}, 3000)

describe('Test Contact Us form WebdriverUni', () => {
  it('Should be able to submit a successful submission via contact us form', () => {
	  ContactUs_Page.submitAllInformationViaContactUsForm('joe' , 'corr', 'bob@gmail.com', 'This is s comment');
	  ContactUs_Page.successfulSbumissionHeader.waitForDisplayed(3000);
	  try {
		  expect(ContactUs_Page.successfulSubmissionHeaderText).to.equal('Thank You for your Message!')
	  }catch (err) {
		  console.log('Exception:' + err)
          assert.fail();
	  }
   });

  // it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  // 	ContactUs_Page.setFirstName('Mike');
  // 	ContactUs_Page.setLastName('Woods');
  // 	ContactUs_Page.setEmailAddress('mike_woods@mail.com');
  // 	ContactUs_Page.clickSubmitButton();
  // 	ContactUs_Page.confirmUnsuccessfulSubmission();
  //   });
  //
  // it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  // 	ContactUs_Page.setFirstName('Sarah');
  // 	ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
  // 	ContactUs_Page.clickSubmitButton();
  // 	ContactUs_Page.confirmUnsuccessfulSubmission();
  //   });

  it('Test 2: Should not be able to submit a successful submission via contact us form as all fields are required', () => {
  	ContactUs_Page.setLastName('Jo');
  	ContactUs_Page.setEmailAddress('jog@email.com')
  	ContactUs_Page.clickSubmitButton();
  	try {
		expect(ContactUs_Page.unsuccessfulSubmissionHeaderText).to.contains('Error: all fields are required')
	}catch (err) {
		console.log('Expection: '+ err)
		assert.fail();
	}
    });
});