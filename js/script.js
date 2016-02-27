$(document).ready(function () {
  $('.box > div').click(function () {
    if ($('.box').hasClass('small')) {
      $('.box').removeClass('small');
    }
    else {
      if ($('.box').hasClass('unfolded')) {
        $('.box > div').removeClass('unfolded');
        $(this).addClass('unfolded');
      }
      else {
        $('.box').toggleClass('unfolded');
        $('.box > div').removeClass('unfolded');
        $(this).addClass('unfolded');
      }
    }
  });

  $('*').click(function (e) {
    if ($(this).attr('id') == 'background') {
      $('.box > div, .box').removeClass('unfolded');

      if ($('.box').hasClass('post')) $('.box').addClass('small');
    }
  });

  $('.portfoliogrid > div').click(function () {
    $('.project').removeClass('selected');
    $('.project.' + $(this).attr('class')).addClass('selected');
  });
});
