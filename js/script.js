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

  $(document).click(function (e) {
    console.log(e.target.tagName);
    if (e.target.tagName == 'HTML' || e.target.tagName == 'BODY') {
      $('.box > div, .box').removeClass('unfolded');

      if ($('.box').hasClass('post')) $('.box').addClass('small');
    }
    console.log($(e.target).parents());
  });

  $('.portfoliogrid > div').click(function () {
    $('.project').removeClass('selected');
    $('.project.' + $(this).attr('class')).addClass('selected');
  });
});
