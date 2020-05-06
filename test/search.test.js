browser
    // .init()
    .url('http://duckduckgo.com')
    .setValue('#search_form_input_homepage', 'WebdriverIO')
    .click('#search_button_homepage')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);

    // outputs:
    // "Title is: WebdriverIO (Software) at DuckDuckGo"
})
