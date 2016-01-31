$(document).ready(function () {
  $('.box > div').click(function () {
    if ($('.box').hasClass('unfolded')) {
      $('.box > div').removeClass('unfolded');
      $(this).addClass('unfolded');
    }
    else {
      $('.box').toggleClass('unfolded');
      $('.box > div').removeClass('unfolded');
      $(this).addClass('unfolded');
    }
    // $('.box')
  });

  $(document).click(function (e) {
    console.log('something', e);
    if (e.target.tagName == 'HTML') {
      $('.box > div, .box').removeClass('unfolded');
    }
  })
});
