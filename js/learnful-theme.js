(function ($, Drupal, drupalSettings) {

    'use strict';
  
    Drupal.behaviors.visualScripts = {
      attach: function (context, settings) {

        //console.log('learnful-theme.js loaded and running.')

        // toggle .sidebar-offcanvas-right
        $("a#openUserNav").click(function() {
          $("aside.sidebar-offcanvas-right").animate({ width: "16%"});
          $("#full-page-overlay").css('display','block');
        });

        // close .sidebar-offcanvs-right
        $("a#close-sidebar-off-right").click(function() {
          $("aside.sidebar-offcanvas-right").animate({ width: "0px"});
          $("#full-page-overlay").css('display','none');
        });

      }
    }

})(jQuery, Drupal, drupalSettings);