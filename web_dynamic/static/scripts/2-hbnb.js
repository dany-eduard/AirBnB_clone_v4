$(document).ready(function () {
  const obj = {};
  const HOST = '0.0.0.0';
  const API_URL = `http://${HOST}:5001/api/v1/status/`;

  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      obj[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete obj[$(this).attr('data-id')];
    }
    $('div.amenities h4').html(Object.values(obj).join(', '));
  });

  $.getJSON(API_URL, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
