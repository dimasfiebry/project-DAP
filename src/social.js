
// Navbar
$(document).ready(function() {
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('.navbar').outerHeight();
  
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
  
       // Scroll down
       if (st > lastScrollTop && st > navbarHeight){
          // Scroll down and past the navbar
          $('.navbar').addClass('hidden');
       } else {
          // Scroll up or at the top
          if(st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('hidden');
          }
       }
  
       lastScrollTop = st;
    });
  });
  
  