var clicks = 0
$(document).ready(function () {
    console.log('script.js is sourced in');
    $('#generate').on('click', function() {
        clicks++;
        // console.log('generate was clicked');
        $('body').append('<div class="step2">' +
        '<p>This button was clicked ' + clicks +
        '</p>' + '<button class="swap">Swap</button>' +
        '<button class="delete">Delete</button>' + '</div>')
        // $('.step2').append('<button class="swap">Swap</button', '<button class="delete">Delete</button>')
    
    $('.delete').on('click', function() {
        // console.log('delete was clicked');
        
    $(this).parent().remove()   
    })
$('.step2').on('click', '.swap', function() {
    // console.log('swap was clicked');
    $(this).parent().css('background-color', 'yellow');
    
})
});
})