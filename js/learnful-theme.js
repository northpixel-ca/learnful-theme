(function ($, Drupal, drupalSettings) {

    'use strict';
  
    Drupal.behaviors.visualScripts = {
      attach: function (context, settings) {

        //console.log('learnful-theme.js loaded and running.')

        // open .sidebar-offcanvas-right when menu is clicked
        $("a#openUserNav").click(function() {
          $("aside.sidebar-offcanvas-right").addClass("is-open").animate({ right: "0px"}, 100);
          $("#full-page-overlay").css('display','block');
          $("button#close-sidebar-off-right").css('display','block');
        });
        // close .sidebar-offcanvs-right when close button is clicked
        $("button#close-sidebar-off-right").click(function() {
          $("aside.sidebar-offcanvas-right").removeClass("is-open").animate({ right: "-250px"}, 100);
          $("#full-page-overlay").css('display','none');
          $("button#close-sidebar-off-right").css('display','none');
        });
        // close .sidebar-offcanvs-right and navbar.collapse when body overlay is clicked
        $("#full-page-overlay").click(function() {
          $("aside.sidebar-offcanvas-right").removeClass("is-open").animate({ right: "-250px"}, 100);
          $("aside.sidebar-left").removeClass("is-open").animate({ left: "-250px"}, 100);
          // $("header#navbar #navbar-collapse").toggleClass("collapse");
          // $("header#navbar").css("z-index","1030");
          $("#full-page-overlay").css('display','none');
          $("button#close-sidebar-off-right").css('display','none');
        });

        // open #navbar-collapse when menu is clicked
        $("button#toggle-mobile-nav").click(function() {

          $("aside.sidebar-left").addClass("is-open").animate({ left: "0px"}, 100);

          // $("header#navbar #navbar-collapse").toggleClass("collapse");
          // $("header#navbar").css("z-index","1031");
          $("#full-page-overlay").css('display','block');
        });


      }
    }

})(jQuery, Drupal, drupalSettings);