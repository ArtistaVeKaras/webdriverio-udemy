const request = require('sync-request');

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html')
})
describe('Async request-->', function () {
    const res = request('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
    const contactDetails = JSON.parse(res.getBody().toString('utf-8'));
    contactDetails.forEach(function (Details) {

        it('should return sync values from the browser', function (done) {
            console.log('hi')
            browser.setValue('input[name=\'first_name\']', Details.name)
            browser.setValue('input[name=\'last_name\']', Details.name)
            browser.setValue('input[name=\'email\']', Details.email)
            browser.setValue('textarea[name=\'message\']', Details.body)
        })
        browser.click('input[type=\'submit\']')
    })
})
