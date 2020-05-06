describe('Test that the button is clickable once the Ajax loader completes loading',function () {
    it('should attempt to click the button asap', function (done) {
        browser.url('/Ajax-Loader/index.html')
        browser.click('#button1')
    });
    it.only('should attempt to click button after 7 sec', function (done) {
        browser.url('/Ajax-Loader/index.html')
        this.timeout(100000);
        browser.pause(7000)
        browser.click('span#button1 > p')
    });
});