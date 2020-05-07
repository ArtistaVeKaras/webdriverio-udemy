describe('Test Radio buttons Page', () => {
    beforeEach(() => {
        browser.url('Dropdown-Checkboxes-RadioButtons/index.html');
    })
    it('should be able to focus on checkbox elements', function () {
        browser.click('input[value=\"option-1\"]')
        const checkBox1 = browser.hasFocus('input[value="option-1"]');
        console.log('Check button one has the value of:',+checkBox1);
        expect(checkBox1, 'Checkbox1 should have focus').to.be.true;

        const checkBox2 = browser.hasFocus('input[value="option-3"]');
        console.log('Check button one has the value of:',+checkBox2);
        expect(checkBox2, 'Checkbox2 should not have focus').to.be.false;
    });
})