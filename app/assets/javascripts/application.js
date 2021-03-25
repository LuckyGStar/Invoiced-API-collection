// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .

window.addEventListener('load', (e) => {
  document.querySelector('.btn__token--generate').addEventListener('click', (e) => {
    Invoiced.setPublishableKey({ InvoicedPublishableKey });

    // This information should be collected by your form...
    var number = 'card_number';
    var cvc = 'cvc';
    var expMonth = '00';
    var expYear = '0000';
    var name = 'name';
    var address = {
        address1: 'address1',
        address2: null,
        city: 'city',
        state: 'state',
        postal_code: 'postal_code',
        country: 'US'
    };

    Invoiced.card.tokenize(number, cvc, expMonth, expYear, name, address, handleInvoicedToken);

    function handleInvoicedToken(statusCode, response) {
      if (statusCode >= 400) {
        console.error(response.message);
        return;
      }

      console.log('Success! Send this token to the backend for the next step: ', response.id);
    }
  });
});
