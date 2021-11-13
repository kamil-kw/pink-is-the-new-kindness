$(document).ready(function() {
    /* Enlarge effect */
    $(".scale").hover(function() {
        $(".scale").addClass('transition');

    }, function() {
        $(".scale").removeClass('transition');
    });
});