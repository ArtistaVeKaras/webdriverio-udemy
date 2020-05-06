//no mocha framework used here
//navigates to duckduckgo and types webdriverio and click the search btn
browser
    .url('https://duckduckgo.com/')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);

})
