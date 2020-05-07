beforeEach(function () {
    browser.url('/Hidden-Elements/index.html')
})
describe('Test whever hidden elements exist', () =>{
    it('Button display is set to non displayed but still exists in html dom therefore should return true', function () {
       const isDisplayed = browser.isExisting('#not-displayed');
       expect(isDisplayed).to.equal(true);
    });
    it('Button display is set to visibility hidden but still exists in html dom therefore should return true', function () {
        const isDisplayed = browser.isExisting('#visibility-hidden');
        expect(isDisplayed).to.equal(true);
    })
    it('Button display is set to zero opacity but still exists in html dom therefore should return true', function () {
        const isDisplayed = browser.isExisting('#zero-opacity');
        expect(isDisplayed).to.equal(true);
    })
    it('Button display does not exist in html dom therefore should return false', function () {
        const isDisplayed = browser.isExisting('#nodfsdft-displayed');
        expect(isDisplayed).to.equal(false);
    })
})