import $ from 'jquery';

export default function (t, ev) {

   function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      const expires = 'expires=' + d.toUTCString();
      document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
   }

   function getCookie(cname) {
      const name = cname + '=';
      const ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
         var c = ca[i];
         while (c.charAt(0) === ' ') {
            c = c.substring(1);
         }
         if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
         }
      }
      return '';
   }

   const deleteCookie = function(name) {
      document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
   };

   if ((ev === true) && (getCookie('haloNewsletterPopup') === '')) {
      setTimeout(function() {
         $('#halo-newsletter-popup').removeClass('hide').addClass('animated fadeIn');
         $('body').addClass('has-newsletter');
      }, 2000);

      $('#popupSubcribeFormSubmit').submit(function(event) {
         if ($('#popupSubcribeFormSubmit').find('#nl_first_name').val() === '') {
            alert('Please enter your Name!');
            $('#popupSubcribeFormSubmit').find('#nl_first_name').focus();
            return false;
         } else if ($('#popupSubcribeFormSubmit').find('#nl_email').val() === '') {
            alert('Please enter a valid email address, such as john@example.com.');
            $('#popupSubcribeFormSubmit').find('#nl_email').focus();
            return false;
         } else {
            setCookie('haloNewsletterPopup', 'closed', t);

            $('#halo-newsletter-popup').addClass('animated fadeOut');
            setTimeout(function() {
               $('#halo-newsletter-popup').addClass('hide');
               $('body').removeClass('has-newsletter');
               return true;
            }, 600);
         }
      });

      function setClosePopup() {
         setCookie('haloNewsletterPopup', 'closed', t);
         $('#halo-newsletter-popup').addClass('animated fadeOut');
         setTimeout(function() {
            $('#halo-newsletter-popup').addClass('hide');
            $('body').removeClass('has-newsletter');
         }, 600);
      }

      $(document).on('click', '[data-close-newsletter-popup]', function() {
         setClosePopup();
      });

      $(document).keyup(function(e) {
         if (e.keyCode === 27) { // escape key maps to keycode `27`
            setClosePopup();
         }
      });
   }

   if (ev === false) {
      deleteCookie('haloNewsletterPopup');
   }
}
