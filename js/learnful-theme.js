(function ($, Drupal, drupalSettings) {

    'use strict';
  
    Drupal.behaviors.visualScripts = {
      attach: function (context, settings) {

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
        // close .sidebar-offcanvs-right and .sidebar-left when body overlay is clicked
        $("#full-page-overlay").click(function() {
          $("aside.sidebar-offcanvas-right.is-open").removeClass("is-open").animate({ right: "-250px"}, 100);
          $("aside.sidebar-left.is-open").removeClass("is-open").animate({ left: "-250px"}, 100);
          $("#full-page-overlay").css('display','none');
          $("button#close-sidebar-off-right").css('display','none');
        });
        // open #navbar-collapse when menu is clicked
        $("button#toggle-mobile-nav").click(function() {
          $("aside.sidebar-left").addClass("is-open").animate({ left: "0px"}, 100);
          $("#full-page-overlay").css('display','block');
        });

        // move node actions to node-form-top
        $('form.node-form > #edit-actions').appendTo( $('#top-bar-right') );


      }
    }

})(jQuery, Drupal, drupalSettings);