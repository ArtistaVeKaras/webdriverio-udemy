beforeEach(function() {
    // browser.url('/Accordion/index.html')
})
describe('Verify the that correct text appears on the accordion page. -->', function () {
    it('should verify loading complete text is visible after a set duration of time', function () {
        element = $('#hidden-text')
        console.log(element);

        while (element.getText() != 'LOADING COMPLETE.') {
            browser.pause(1000)
        }
        console.log(element.getText);
    });
    //waif for element to be visible
    it('Validate whether the click me button is visible', function () {
        browser.url('Ajax-Loader/index.html')
        this.timeout(2000)
        elem = $('#button1')
        browser.waitForExist('#button1',8000, false)
        console.log(elem.getText);
    });
    it('Validate whether the click me button appears once the Ajax loader fully loads', function () {
        this.timeout(6000)
        browser.url('Ajax-Loader/index.html')
        const clickBtn = "//p[text()='CLICK ME!']"
        browser.waitForVisible(clickBtn, 8000, false)
    });
    //wait until
    it.only('Verify relevant text LOADING COMPLETE appear after a period of time', function () {
        browser.url('/Accordion/index.html')
        this.timeout(2000)
        browser.waitUntil( function () {
            return browser.getText('#hidden-text') === 'LOADING COMPLETE.'
            console.log(browser.getText('#hidden-text'));
        }, 1200, 'expected text to be different')
    });
})