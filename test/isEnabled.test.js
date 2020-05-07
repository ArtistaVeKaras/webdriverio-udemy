describe('Test Enabled dropdown menus, checkbox & radio buttons', () => {
    beforeEach(() => {
        browser.url('Dropdown-Checkboxes-RadioButtons/index.html')
    })
    it('Dropdown-item orange is disabled therefore should return false', function () {
        const orangeDropDown = browser.isEnabled('option[value=\"orange\"]')
        console.log(orangeDropDown)
        expect(orangeDropDown).to.be.false
    });
    it('Dropdown-item grape is enable should return false', function () {
        const grapeDropDown = browser.isEnabled('option[value=\"grape\"]')
        console.log(grapeDropDown)
        expect(grapeDropDown).to.be.true;
    })
    it('OPTION-2 is enable therefore should return false', function () {
        const option2 = browser.isEnabled('input[value=\"option-2\"]')
        console.log(option2)
        expect(option2).to.be.true
    })
    it('Radio button pumpkin is enable therefore should return true', function () {
        const pumpkin = browser.isEnabled('input[value=\"pumpkin\"]')
        console.log(pumpkin)
        expect(pumpkin).to.be.true
    })
    it('Radio button cabbage is disabled therefore should return false', function () {
        const cabbage = browser.isEnabled('input[value=\"cabbage\"]')
        console.log(cabbage)
        expect(cabbage).to.be.false
    });
})