$(function() {
    $('#showshop').hover(function() {
      $('#middlespace').css('background-color', 'yellow');
    }, function() {
      // on mouseout, reset the background colour
      $('#middlespace').css('background-color', '');
    });
  });