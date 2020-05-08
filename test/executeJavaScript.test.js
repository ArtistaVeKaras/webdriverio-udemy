beforeEach(function() {
    browser.url('https://www.w3schools.com/html/html5_video.asp')
})
//combining the add command
browser.addCommand('isVideoPaused',function () {
    //validate if video is paused when accessing the page
    const isPaused = browser.execute(function () {
    console.log('Outputted inside the browser')

    const video = document.getElementById('#video');
        return video.paused;
    })
    return isPaused.value;
})
describe('video test -->', function() {
    it('should  validate that the video is paused upon accessing the page', function () {
        // timedOut(2000);
        const isPaused = browser.isVideoPaused();
        expect(isPaused).to.be.true;
         browser.pause(3000)
    });
    it.skip('should alter the width of the video', function () {
        const videoWidth = browser.execute(function () {
            const video = document.getElementById('#video1');
            return video.style.width = "300px"
        });
        // return videoWidth.value;
        browser.pause(3000)
    });
    //simplified version
    it('should perform a javascript in the browser ', function () {
       browser.execute(function () {
        const video = document.querySelector('#video1')
           console.log('executing script:')
           video.play();
       })
        // browser.debug()
    });
})