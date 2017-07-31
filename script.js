var clicks = 0
$(document).ready(function () {
    console.log('script.js is sourced in');
    $('#generate').on('click', function() {
        clicks++;
        // console.log('generate was clicked');
        $('body').append('<div>' + '<p>This button was clicked ' + clicks + '</p>' + '</div>')
    })
});