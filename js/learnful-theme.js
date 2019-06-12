(function ($, Drupal, drupalSettings) {

    'use strict';
  
    Drupal.behaviors.visualScripts = {
      attach: function (context, settings) {

        //console.log('learnful-theme.js loaded and running.')

        // toggle .sidebar-offcanvas-right
        $("a#openUserNav").click(function() {
          $("aside.sidebar-offcanvas-right").toggle();
        });

      }
    }

})(jQuery, Drupal, drupalSettings);