jQuery(document).ready(function($) {
    //600px以上の場合
    if (window.matchMedia( '(max-width: 670px)' ).matches) {
      var duration = 300;

      $('.inner button')
      .on('mouseover', function(){
          $(this).stop(true).animate({
              backgroundColor: '#faee00',
              color: '#000'
          }, duration);
      })
      .on('mouseout', function(){
          $(this).stop(true).animate({
              backgroundColor: '#fff',
              color: '#01b169',
          }, duration);
      });
    //600px以下の場合
    } 
});
