
 $(document).ready(function () {
    /* Every time the window is scrolled ... */
    $(window).scroll(function () {
         // Check the location of each desired element with a fade class */
         $(".fade").each( function() {
            // fade in
            $(this).animate({'opacity':'1'}, 2000);
        }); 
    });
 });
