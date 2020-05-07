describe('Test Selected Dropdown menus, checkboxes & radio Buttons! --> ', function () {
    beforeEach(function () {
        browser.url('Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('Dropdown item Java is selected therefore should return true', function () {
        const Java = browser.isSelected('option[value=\"java\"]')
        console.log(Java)
        expect(Java).to.be.true
    });

    it('Dropdown item maven is not selected therefore should return false', function () {
        const maven = browser.isSelected('option[value=\"maven\"]')
        console.log(maven)
        expect(maven).to.be.false
    });

    it('Option2 is not selected therefore should return false', function () {
        const option2 = browser.isSelected('input[value=\"option-2\"]')
        console.log(option2)
        expect(option2).to.be.false
    });
    it('Option3 is selected therefore should return true', function () {
        const option3 = browser.isSelected('input[value=\"option-3\"]')
        console.log(option3)
        expect(option3).to.be.true
    });
    it('Radio button pumpkin is selected therefore should return true', function () {
        const radioBtn = browser.isSelected('input[value=\"pumpkin\"]')
        console.log(radioBtn)
        expect(radioBtn).to.be.true
    });
})