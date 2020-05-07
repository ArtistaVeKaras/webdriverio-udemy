beforeEach(function () {
    browser.url('/Hidden-Elements/index.html')
})
describe('Test whether hidden elements exist', () =>{
    it('Button display is set to non displayed but therefore should return false', function () {
        const isDisplayed = browser.isVisible('#not-displayed');
        expect(isDisplayed).to.equal(false);
    });
    it('Button display is set to visibility therefore should return false', function () {
        const isDisplayed = browser.isVisible('#visibility-hidden');
        expect(isDisplayed).to.equal(false);
    })
    it('Button display is set to zero opacity therefore should return false', function () {
        const isDisplayed = browser.isVisible('#zero-opacity');
        expect(isDisplayed).to.equal(false);
    })
    it('Button display does not exist in html dom therefore should return false', function () {
        const isDisplayed = browser.isVisible('#nodfsdft-displayed');
        expect(isDisplayed).to.equal(false);
    })
})