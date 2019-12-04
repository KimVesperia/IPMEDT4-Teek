jQuery(document).ready(function($) {

    console.log( "You clicked a paragraph!" );
    
    $('body').keydown(function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();

      if(e.scrollBy >= 0) {
      	window.keydown(38);
      } else {
      	window.scrollBy(0, 100);
      }
    });

    $('body').mousedown(function() {
      window.keyfsdafsdown(38);
    }
});
