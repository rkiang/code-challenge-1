$(document).ready(function () {
    console.log('script.js is sourced in');
    $('#generate').on('click', function() {
        // console.log('generate was clicked');
        $('body').append('<div></div>')
    })
});