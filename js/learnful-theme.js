(function ($, Drupal, drupalSettings) {

    'use strict';
  
    Drupal.behaviors.visualScripts = {
      attach: function (context, settings) {

        // open .sidebar-offcanvas-right when menu is clicked
        $("a#openUserNav").click(function() {
          $("aside.sidebar-offcanvas-right").addClass("is-open").css("right", "0px");
          $("#full-page-overlay").css('display','block');
          $("button#close-sidebar-off-right").css('display','block');
        });
        // close .sidebar-offcanvs-right when close button is clicked
        $("button#close-sidebar-off-right").click(function() {
          $("aside.sidebar-offcanvas-right").removeClass("is-open").css( "right", "-250px");
          $("#full-page-overlay").css('display','none');
          $("button#close-sidebar-off-right").css('display','none');
        });
        // close .sidebar-offcanvs-right and .sidebar-left when body overlay is clicked
        $("#full-page-overlay").click(function() {
          $("aside.sidebar-offcanvas-right.is-open").removeClass("is-open").css("right","-250px");
          $("aside.sidebar-left.is-open").removeClass("is-open").css("left", "-250px");
          $("#full-page-overlay").css('display','none');
          $("button#close-sidebar-off-right").css('display','none');
        });
        // open #navbar-collapse when menu is clicked
        $("button#toggle-mobile-nav").click(function() {
          $("aside.sidebar-left").addClass("is-open").css("left", "0px");
          $("#full-page-overlay").css('display','block');
        });

        // move node actions to node-form-top
        $('form.node-form > #edit-actions').appendTo( $('#top-bar-right') );
        $('form.user-form > #edit-actions').appendTo( $('#top-bar-right') );


        // enable bootstrap tooltip when data-toggle=tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // change value of flag count when flag link clicked.
        $(".flag.action-flag > a").one("click", function(){
          location.reload();
        });
        $(".flag.action-unflag > a").one("click", function(){
          location.reload();
        });


        // change the text for form buttons
        $("form#change-pwd-form button#edit-submit").text('Update Password');


        // add help block to entity browser field - Project Entity Browser
        $('#edit-field-projects--content .panel-body').once().prepend(`<p class="help-block">Select and organize the projects you want to display on your public profile.`);

        // add help block to entity browser field - Interactive Content Entity Browser
        $('.paragraph-type--interactive-content-h5p- .panel-body').once().prepend(`<p class="help-block">Select the interactive content that you want to display here. You can select content that you have created, or content created by others.`);

        // add ReadMore.js to text with class = .can-expand
        $('.can-expand').readmore({
          collapsedHeight: 130,
          heightMargin: 15,
        });

        // Move H5P Editor Settings to Settings Panel
        $('.field--widget-h5p-editor .panel-body > .form-type-checkbox').each(function(){
          $(this).prependTo("#edit-group-h5p-settings > .panel-body");
        });

        // Move Forum topic "shadow" options to correct div
        $('form.node-forum-edit-form >.form-item-shadow').each(function(){
          $(this).appendTo("#append-shadow > .panel-body");
        });

        // Set node edit/add page title from document title
        $("#node-add-edit-title").each(function() {
          $(this).text($(document).find("title").text().split(" | ")[0]);
        });

        // Change button text for comment submit button
        $(".form.comment-form > .form-actions > button#edit-submit").text("Post Comment");

        // jquery match height
        $(".card.card-grid-content .card-body").matchHeight();
        $(".match-height").matchHeight();

        // start with all content block paragraph previews collapsed
        // Note: causes h5p element to not render.
        // $( document ).ready(function() {
        //   $(".paragraph--view-mode-preview .panel-collapse").collapse('toggle');
        // });

        // toggle collapse of all panels
        $("a#details-collapsor").click(function(){
          $(".paragraph--view-mode-preview .panel-collapse").collapse('toggle');
        });

        // copy the value of the textarea that holds the url to be shared
        $("button.copy-share").on("click", function(){
          var shareEl = $(this);
          shareEl.siblings("textarea").select();
          document.execCommand('copy');
          shareEl.text("Copied!");
          
          setTimeout(function() {
            shareEl.text("Copy")
          }, 3000);
        });

        // copy the value of the textarea that holds the embed code
        $("button.copy-embed").on("click", function(){
          var shareEl = $(this);
          shareEl.siblings("textarea").select();
          document.execCommand('copy');
          shareEl.text("Copied!");
          
          setTimeout(function() {
            shareEl.text("Copy")
          }, 3000);
        });


        // run stuff after ajax callback
        $(document).ajaxComplete(function (e, xhr, settings) {
          // jquery match height
          $(".card.card-grid-content .card-body").once().matchHeight();
          $(".match-height").once().matchHeight();
        });

      }
    }

    Drupal.behaviors.paragraphScripts = {
      attach: function (context, settings) {

        // set the background color for a paragraph
        $("[data-bgcolor]").each(function() {

          var needsWhiteText = [
            "#0074D9",
            "#FF851B",
            "#FF4136",
            "#B10DC9",
            "#111111",
            "#AAAAAA"
          ]

          var bgcolor = $(this).attr("data-bgcolor");
          var textcolor = '';
        
          if (bgcolor === needsWhiteText) {
            textcolor = "white"
          }
          $(this).css("background-color", bgcolor);
          $(this).css("color", textcolor);
        });

      }
    }

    Drupal.behaviors.socialShare = {
      attach: function (context, settings) {

        // store popup window options
        var getWindowOptions = function() {
          var width = 450;
          var height = 450;
          var left = (window.innerWidth / 2) - (width / 2);
          var top = (window.innerHeight / 2) - (height / 2);
        
          return [
            'resizable,scrollbars,status',
            'height=' + height,
            'width=' + width,
            'left=' + left,
            'top=' + top,
          ].join();
        };

        $("a.share-on-twitter").on("click", function(e){
          var tw_text = encodeURIComponent($(this).attr('data-text'));
          var tw_url = encodeURIComponent($(this).attr('data-url'));
          var tw_hashtags = encodeURIComponent($(this).attr('data-hashtags'));
          var tw_via = encodeURIComponent($(this).attr('data-via'));
          var tw_related = encodeURIComponent($(this).attr('data-related'));

          var tw_shareurl = `https://twitter.com/intent/tweet?text=${tw_text}&via=${tw_via}&hashtags=${tw_hashtags}&url=${tw_url}&related=${tw_related}`;
          
          e.preventDefault();
          var win = window.open(tw_shareurl, 'ShareOnTwitter', getWindowOptions());
          win.opener = null;
        });

        $("a.share-on-linkedin").on("click", function(e){
          var ln_title = encodeURIComponent($(this).attr('data-title'));
          var ln_url = encodeURIComponent($(this).attr('data-url'));
          var ln_summary = encodeURIComponent($(this).attr('data-summary'));
          var ln_source = encodeURIComponent($(this).attr('data-source'));

          var ln_shareurl = `http://www.linkedin.com/shareArticle?mini=true&url=${ln_url}&title=${ln_title}&summary=${ln_summary}&source=${ln_source}`;
          
          e.preventDefault();
          var win = window.open(ln_shareurl, 'ShareOnLinkedIn', getWindowOptions());
          win.opener = null;
        });

        $("a.share-lms.gclassroom").on("click", function(e){
          var gcl_title = encodeURIComponent($(this).attr('data-title'));
          var gcl_url = encodeURIComponent($(this).attr('data-url'));

          var gcl_shareurl = `https://classroom.google.com/share?url=${gcl_url}&title=${gcl_title}`;
          
          e.preventDefault();
          var win = window.open(gcl_shareurl, 'ShareInGoogleClassroom', getWindowOptions());
          win.opener = null;
        });


      }
    }

})(jQuery, Drupal, drupalSettings);