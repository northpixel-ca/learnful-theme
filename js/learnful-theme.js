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
          $("aside.sidebar-offcanvas-left").removeClass("is-open").css( "left", "-350px");
          $("button#close-sidebar-off-left").css('display','none');
          $("#full-page-overlay").css('display','none');
          $("button#close-sidebar-off-right").css('display','none');
        });
        // open #navbar-collapse when menu is clicked
        $("button#toggle-mobile-nav").click(function() {
          $("aside.sidebar-left").addClass("is-open").css("left", "0px");
          $("#full-page-overlay").css('display','block');
        });

        // open .sidebar-offcanvas-left when menu is clicked
        $("button#toggle-module-nav").click(function() {
          $("aside.sidebar-offcanvas-left").addClass("is-open").css("left", "0px");
          $("#full-page-overlay").css('display','block');
          $("button#close-sidebar-off-left").css('display','block');
        });
        // // close .sidebar-offcanvs-left when close button is clicked
        // $("button#close-sidebar-off-left").click(function() {
        //   $("aside.sidebar-offcanvas-left").removeClass("is-open").css( "left", "-350px");
        //   $("#full-page-overlay").css('display','none');
        //   $("button#close-sidebar-off-left").css('display','none');
        // });


        // set active menu item for correct lesson when viewed from module context
        $('.module-nav-item > a').each(function(){
          if (window.location.href.indexOf($(this).attr("href")) >= 0) {
            $(this).addClass("active");
            $(this).parent().addClass("current");
          }
        })

        // set active menu for group inner menu
        $('.group-menu a').each(function(){
          if (window.location.href.indexOf($(this).attr("href")) >= 0) {
            $(this).addClass("active");
          }
        });

        // move node actions to node-form-top
        if ($("body").hasClass("path-clone")){
          $('form.node-form > #edit-actions').appendTo( $('.field--name-field-top-bar-region-lesson-clon #top-bar-right') );
          $(".field--name-field-top-bar-region-lesson-clon button#edit-submit").html('<i class="fas fa-code-branch"></i> Create Remix');

          $('form.node-form > #edit-actions').appendTo( $('.field--name-field-top-bar-region-h5p-clone #top-bar-right') );
          $(".field--name-field-top-bar-region-h5p-clone button#edit-submit").html('<i class="fas fa-code-branch"></i> Create Remix');

          $('form.node-form > #edit-actions').appendTo( $('.field--name-field-top-bar-region-module-clon #top-bar-right') );
          $(".field--name-field-top-bar-region-module-clon button#edit-submit").html('<i class="fas fa-code-branch"></i> Create Remix');
        } else {
          $('form.node-form > #edit-actions').appendTo( $('#top-bar-right') );
          $('form.group-form > #edit-actions').appendTo( $('#top-bar-right') );
        }        
        $('form.user-form > #edit-actions').appendTo( $('#top-bar-right') );
        


        // enable bootstrap tooltip when data-toggle=tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // change value of flag count when flag link clicked.
        // $(".flag.action-flag > a").one("click", function(){
        //   location.reload();
        // });
        // $(".flag.action-unflag > a").one("click", function(){
        //   location.reload();
        // });


        // change the text for form buttons
        $("form#change-pwd-form button#edit-submit").text('Update Password');


        // add help block to entity browser field - Project Entity Browser
        $('#edit-field-projects--content .panel-body').once().prepend(`<p class="help-block">Select and organize the projects you want to display on your public profile.`);

        // add help block to entity browser field - Interactive Content Entity Browser
        $('.paragraph-type--interactive-content-h5p- .panel-body').once().prepend(`<p class="help-block">Select the interactive content that you want to display here. You can select content that you have created, or content created by others.`);

        // add help block to entity browser field - Tutorials for Minibooks Entity Browser
        $('#edit-field-table-of-contents-wrapper .panel-body').once().prepend(`<p class="help-block">Select and add Tutorial Resources that you want to include in this Minibook. You can select content that you have created, or content shared by others.`);

        // add help block to entity browser field - Group Content for Collection
        $('#edit-field-resources .panel-body').once().prepend(`<p class="help-block">Build a Collection by selecting and adding Resources shared in your Workspace's Labs.`);

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
        $(".comment-comment-forum-form > .form-actions > button#edit-submit").text("Post Comment");
        $("#comment-list > form.ajax-comments-form-edit .form-actions > button[id*='edit-ajax']").text("Save Changes");

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

        // copy the value of the textarea that holds the collab id to share
        $("button.copy-collabid").on("click", function(e){
          e.preventDefault;
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


        // get group join link for group 403 page
        $("#get_group_joinlink").each(function(){
          var pathname = window.location.pathname.split('/');
          var btnhref = '/group/' + pathname[2] + '/join?destination=/workspace/' + pathname[2] + '/dashboard';
          $(this).attr('href', btnhref);
        });

        // make comment links field use modal
        //$('.comment .group-header ul.links li a').addClass('use-ajax').attr('data-dialog-type','modal');

        // auto generate table of contents on tutorial launch page
        // $("body.launch-page").each(function() {
        //   var navSelector = '#toc';
        //   var $myNav = $(navSelector);
        //   Toc.init($myNav);
        //   $('body').scrollspy({
        //     target: navSelector
        //   });
        // });

        


      }
    }

    Drupal.behaviors.groupElements = {
      attach: function (context, settings) {

        // Change Create Group Button Text: Sprint
        $('form.group-sprint-add-form button#edit-submit').text("Create and Host Sprint");
        

        

      }
    }

    Drupal.behaviors.modulePages = {
      attach: function (context, settings) {

        // Set Prev / Next Pager links
        $(".module-nav-item.current").each(function(){
          if ($(this).prev("div").length){
            $('#prev-resource').css('display','block');
            var prevTitle = $(this).prev("div").find(".mnav-title").text();
            var prevURL = $(this).prev("div").find('a').attr('href');
            $('#prev-resource').text(prevTitle);
            $('#prev-resource').attr('href',prevURL);
          }
          if ($(this).next("div").length){
            $('#next-resource').css('display','block');
            var nextTitle = $(this).next("div").find(".mnav-title").text();
            var nextURL = $(this).next("div").find('a').attr('href');
            $('#next-resource').text(nextTitle);
            $('#next-resource').attr('href',nextURL);
          }
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
        
          if ($.inArray (bgcolor, needsWhiteText) >= 0) {
            textcolor = "white"
          }
          $(this).css("background-color", bgcolor);
          $(this).css("color", textcolor);
        });

        // add bootstrap classes to table in paragraph: text block
        $(".p-textblock table").addClass("table table-bordered table-striped table-hover");
        $(".table-bootstrap table").addClass("table table-bordered table-striped table-hover");

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

        $("a.share-lms.msteams").on("click", function(e){
          var mst_title = encodeURIComponent($(this).attr('data-assign-title'));
          var mst_url = encodeURIComponent($(this).attr('data-href'));

          var mst_shareurl = `https://teams.microsoft.com/share?assignTitle=${mst_title}&href=${mst_url}&referrer=learnful.ca`;
          
          e.preventDefault();
          window.open(mst_shareurl,'ms-teams-popup','width=700,height=600');
          return false;
        });




      }
    }

  Drupal.behaviors.dknotustour = {
    attach: function (context, settings) {

      // implements dknotus-tour.min.js

      //tour: /clone/*/quick_clone
      $('#clone_tour').click(function(){
        Tour.run([
          {
            element: $('#page-header'),
            content: "<h2>Remixing Resources</h2><p>In this tour, we will cover the basics of creating a Remix of an existing Resource.</p>",
            position: 'bottom',
            forceCorrectionTop: -60,
            padding: 0
          },
          {
            element: $('#page-header'),
            content: "<h2>Resource being Remixed</h2><p>Here we see the info for the Resource you are about to Remix.</p>",
            position: 'bottom',
            forceCorrectionTop: -60,
            padding: 0
          },
          {
            element: $('h1.page-title-title'),
            content: '<p>This is the title of the Resource that will be remixed.</p>',
            position: 'right',
            forceCorrectionTop: -60,
            padding: 5
          },
          {
            element: $('p.page-title-subtitle'),
            content: '<p>Here we have more information about the Resource, including Type, Author, and a link to go back to the Resource.</p>',
            position: 'right',
            forceCorrectionTop: -60,
            padding: 5
          },
          {
            element: $('#node-form-main-wrapper'),
            content: '<h2>The Contents</h2><p>Below the header, we have the contents of the Resource that will be copied into our Remix.</p><p>Note that everything from the original Resource is copied over, except the Collaborators field.</p>',
            position: 'top',
            forceCorrectionTop: -60,
            padding: 15
          },
          {
            element: $('#main-right'),
            content: '<h2>Check the contents</h2><p>Make sure the check and update the contents and metadata before saving your Remix.</p>',
            position: 'top',
            forceCorrectionTop: -60,
            padding: 15
          },
          {
            element: $('#edit-title-0-value'),
            content: '<h2>Change the Title</h2><p>First, you should consider updating the title of your Remix.</p><p>By default, the title of your Remix will be:</p><p class="text-muted">Remix of [original title]</p>',
            position: 'left',
            forceCorrectionTop: -60,
            padding: 15
          },
          {
            element: $('#edit-field-remix-of-wrapper'),
            content: '<h2>Remix of</h2><p>You should also include a reference to the original work.</p><p>This field should be populated with the correct source. If it is not, search for it by title here to reference it from your Remix.</p>',
            position: 'left',
            forceCorrectionTop: -60,
            padding: 15
          },
          {
            element: $('#edit-field-content-blocks-wrapper'),
            content: '<h2>Content Blocks</h2><p>Note that the content blocks are locked and cannot be edited. Once you save your Remix, you will be able to alter the content blocks freely.</p>',
            position: 'top',
            forceCorrectionTop: -60,
            padding: 15
          },
          {
            element: $('#top-bar-right #edit-submit'),
            content: '<h2>Save your Remix</h2><p>Once you are happy with your Remix configuration, go ahead and click on the Create Remix button. This will create a copy of the Resource that you can now edit and alter to fit your needs.</p><p>Always make sure to attribute the original work and author!</p>',
            position: 'left',
            forceCorrectionTop: -60,
            padding: 15
          },
          {
            element: $('#form-help'),
            content: '<h2>More Questions?</h2><p>Lastly, if you still have questions about Remixing Resources, you can find the indepth documentation and discussion in the forums.</p>',
            position: 'left',
            forceCorrectionTop: -60,
            padding: 15
          },
        ]);
      });

    }
  }


})(jQuery, Drupal, drupalSettings);