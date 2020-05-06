describe('Verify whether webdriveruniversity link on homepage work correcttly',() =>{
    it('check the contact us button opens the contact us page' , () => {
        return browser
            .setViewportSize({
                width: 1200,
                height: 800
            })
            .url('/')
            .getTitle().then(function (title) {
                console.log('Title is: ' + title);
            })
            .click('#contact-us')
            .pause(3000)
    })
    it('check that the login button opens the login portal page', function () {
        return browser
            .url('/')
            .click('#login-portal')
            .getTitle().then(function (title) {
                console.log('Title is: ' + title);
            })
    });
})