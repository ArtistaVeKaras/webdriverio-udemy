describe('Validate text is present',function () {
    beforeEach(function () {
        browser
            .url('/Accordion/index.html')
    })
    it('should verify that exists within the loading div container', function () {
       this.timeout(2000)
        const text = browser.waitForValue('#hidden-text')
        console.log(text)
    });
})