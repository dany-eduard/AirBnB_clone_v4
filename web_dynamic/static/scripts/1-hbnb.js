$(document).ready(function () {
  const obj = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      obj[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete obj[$(this).attr('data-id')];
    }
    $('div.amenities h4').html(Object.values(obj).join(', '));
  });
});
