var current_item = 0;

jQuery(document).ready(function($) {
  $("a", '.mainMenu').click(function()
  {
    if( ! $(this).hasClass('active') ) {
      current_item = this;

      $('.section:visible').fadeOut( 1000, function() {
        $('a', '.mainMenu').removeClass( 'active' );
        $(current_item).addClass( 'active' );
        var new_section = $( $(current_item).attr('href') );
        new_section.fadeIn( 1000 );
      } );
    }
    $('.navbar-collapse-fix').collapse('toggle');
    $('.nav-icon3').removeClass('open');
    return false;
  });

  $('.nav-icon3').click(function(){
    $(this).toggleClass('open');
  });
});
