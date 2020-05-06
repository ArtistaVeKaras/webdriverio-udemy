describe('TEst the webdriver university homepage', () => {
    it('should output the height of the homepage carousel', function () {
       browser.url('./')
        const divCarousel = browser.getCssProperty('#udemy-promo-thumbnail', 'height')
        console.log(divCarousel);
    });
})