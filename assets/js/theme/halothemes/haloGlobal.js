import $ from 'jquery';
import classie from 'classie';

export default function() {

   jQuery(document).ready(function($) {

      // OwlCarousel init
      const $carousel = $('[data-owl]');
      if ($carousel.length) {
         $carousel.each(function(index, el) {
            $(this).owlCarousel($(this).data('owl'));
         });

      }

      // Featured Categories on Megamenu
      if ($('.featured-categories .owl-carousel').length > 0) {
         $('.featured-categories .owl-carousel').owlCarousel({
            items: 2,
            slideBy: 2,
            margin: 20,
            nav: true,
            dots: false,
            responsive: {
               0: {
                  items: 1,
                  slideBy: 1
               },
               992: {
                  items: 2,
                  slideBy: 2
               }
            },
            responsiveRefreshRate: 0
         });
      }

      // SideBar Toggle Mobile View
      if ($('#sidebar-toggle').length) {
         $('#sidebar-toggle a').click(function() {
            if ($(this).find('i').hasClass('fa-plus')) {
               $('.page-sidebar > nav').fadeIn(200);
               if ($('.page-sidebar > nav').length) {
                  $(window).scrollTop($(this).offset().top - 15);
               }
               $(this).html('HIDE SIDEBAR <i class="fa fa-minus"></i>');
            } else if ($(this).find('i').hasClass('fa-minus')) {
               if ($('.page-sidebar > nav').length) {
                  $('.page-sidebar > nav').fadeOut(200);
               }
               $(this).html('SHOW SIDEBAR <i class="fa fa-plus"></i>');
            }
         });
      }


      // Mobile Menu Links
      $('#mobile-categories > ul').css('max-height', screen.height);
      $('#mobile-customer > ul').css('max-height', screen.height);
      $(window).resize(function(event) {
         /* Act on the event */
         $('#mobile-categories > ul').css('max-height', screen.height);
         $('#mobile-customer > ul').css('max-height', screen.height);
      });

      $('#mobile-customer ul li > span').click(function() {
         if ($(this).hasClass('toggle-expand')) {
            $(this).siblings('div').addClass('sub-expand');
            $(this).parent().addClass('expanded');
            $(this).attr('class', 'toggle-close');
         } else if ($(this).hasClass('toggle-close')) {
            $(this).siblings('div').removeClass('sub-expand');
            $(this).parent().removeClass('expanded');
            $(this).attr('class', 'toggle-expand');
         }
      });

      // Mobile Search Toggle Button
      $('#mobile-search-toggle').click(function(event) {
         /* Act on the event */
         $('header.header').toggleClass('mobile-search-is-open');
      });
   });


   $(window).resize(function() {
      if ($(window).width() >= 992) {
         $('body').removeClass('st-off-canvas');
         $('#st-container').removeClass('st-effect-1 st-menu-open');
      }
   });


   /**
    * sidebarEffects.js v1.0.0
    * http://www.codrops.com
    *
    * Licensed under the MIT license.
    * http://www.opensource.org/licenses/mit-license.php
    *
    * Copyright 2013, Codrops
    * http://www.codrops.com
    */

   const SidebarMenuEffects = (function() {
      function hasParentClass(e, classname) {
         if (e === document) return false;
         if (classie.has(e, classname)) {
            return true;
         }
         return e.parentNode && hasParentClass(e.parentNode, classname);
      }

      function init() {
         const container = document.getElementById('st-container');
         const buttons = Array.prototype.slice.call(document.querySelectorAll('#st-trigger-effects > a'));
         const buttonsAlt = Array.prototype.slice.call(document.querySelectorAll('li#mobileAccountSidebar > a'));
         // event type (if mobile use touch events)
         const eventtype = $.browser.mobile ? 'touchstart' : 'click';
         const resetMenu = function() {
            classie.remove(container, 'st-menu-open');
            $('body').removeClass('st-off-canvas');
         };
         const bodyClickFn = function(evt) {
            // if( hasParentClass( evt.target, 'close-canvas' ) ) {
            if (!hasParentClass(evt.target, 'st-menu')) {
               resetMenu();
               document.removeEventListener(eventtype, bodyClickFn);
            }
         };

         // toggle categories
         buttons.forEach(function(el, i) {
            const effect = el.getAttribute('data-effect');

            el.addEventListener(eventtype, function(ev) {
               ev.stopPropagation();
               ev.preventDefault();
               container.className = 'st-container'; // clear
               classie.add(container, effect);
               $(window).scrollTop(0);
               setTimeout(function() {
                  classie.add(container, 'st-menu-open');
                  $('body').addClass('st-off-canvas');
               }, 25);
               document.addEventListener(eventtype, bodyClickFn);
            });
         });

         // toggle account
         buttonsAlt.forEach(function(el, i) {
            const effect = el.getAttribute('data-effect');

            el.addEventListener(eventtype, function(ev) {
               ev.stopPropagation();
               ev.preventDefault();
               container.className = 'st-container'; // clear
               classie.add(container, effect);
               $(window).scrollTop(0);
               setTimeout(function() {
                  classie.add(container, 'st-menu-open');
                  $('body').addClass('st-off-canvas');
               }, 25);
               document.addEventListener(eventtype, bodyClickFn);
            });
         });
      }

      init();
   })();

}
