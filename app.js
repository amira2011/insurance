$(document).ready(function() {
   $('.nav-menu .menu li').on('click', function() {
    
      $('.nav-menu .menu li').removeClass('active');
      
    
      $(this).addClass('active');
  });
});