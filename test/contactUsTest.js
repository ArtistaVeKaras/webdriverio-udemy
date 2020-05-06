browser
    //expands the chrome browser
    .setViewportSize({
        width: 1200,
        height: 800
    })
    .url('https://www.webdriveruniversity.com/')
    .getTitle().then(function(title) {
    console.log('Title is: ' + title);
})
    .click('#contact-us')
    .pause(3000)
