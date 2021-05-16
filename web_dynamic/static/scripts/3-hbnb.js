$(document).ready(function () {
  const obj = {};
  const HOST = '0.0.0.0';
  const API_URL = `http://${HOST}:5001/api/v1`;

  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      obj[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete obj[$(this).attr('data-id')];
    }
    $('div.amenities h4').html(Object.values(obj).join(', '));
  });

  $.getJSON(`${API_URL}/status/`, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  $.ajax({
    url: `${API_URL}/places_search/`,
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (response) {
      for (const place of response) {
        const article = [
          '<article>',
          '<div class="title_box">',
          `<h2>${place.name}</h2>`,
          `<div class="price_by_night">$${place.price_by_night}</div>`,
          '</div>',
          '<div class="information">',
          `<div class="max_guest">${place.max_guest} Guest(s)</div>`,
          `<div class="number_rooms">${place.number_rooms} Bedroom(s)</div>`,
          `<div class="number_bathrooms">${place.number_bathrooms} Bathroom(s)</div>`,
          '</div>',
          '<div class="description">',
          `${place.description}`,
          '</div>',
          '</article>',
        ];
        $('SECTION.places').append(article.join(''));
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
});
