class ContactUs_Page {
    get first_name() { return $('[name="first_name"]'); }
    get last_name() { return $('[name="last_name"]'); }
    get emailAdd() { return $('[name="email"]'); }
    get comment() { return $('[name="message"]'); }
    get submitBtn() { return $('[value="SUBMIT"]'); }
    get successfulSbumissionHeader() { return $('#contact_reply h1'); }
    get unsuccessfulMsg() { return $("body"); }
    get successfulSubmissionHeaderText() {
        return this.successfulSbumissionHeader.getText();  //Thank You for your Message!
    }
    get unsuccessfulSubmissionHeaderText() {
        return this.unsuccessfulMsg.getText(); //Error: all fields are required
    }

    setFirstName(firstName) {
        return this.first_name.setValue(firstName);
    }

    setLastName(lastName) {
        return this.last_name.setValue(lastName);
    }

    setEmailAddress(emailAddress) {
        return this.emailAdd.setValue(emailAddress);
    }

    setComments(comments) {
        return this.comment.setValue(comments);
    }

    clickSubmitButton() {
        return this.submitBtn.click();
    }

//some concept as the above but more clear
    submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments){
        if (firstName){
            this.setFirstName(firstName);
        }
        if (lastName){
            this.setLastName(lastName);
        }
        if (emailAddress){
            this.setEmailAddress(emailAddress);
        }
        if (comments){
            this.setComments(comments);
        }
        this.clickSubmitButton();
    }
}
module.exports = new ContactUs_Page();