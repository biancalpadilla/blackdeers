import $ from 'jquery';
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */

export default function() {
   if ($('.productView-info-value[data-custom-field-name="has-size-chart"]').length > 0) {
      if ($('.productView-info-value[data-custom-field-name="has-size-chart"]').text() === "1") {
         $('a[data-reveal-id="modal-size-chart-form"]').removeClass('hide');
      }
   }
}
