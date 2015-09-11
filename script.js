var section = -1;
var things = 0;
var ams = 0;

var thingsIMake = [
  'games',
  'apps',
  'full stack webapps',
  'websites',
  'experiences'
];

var thingsIAm = [
  'programmer',
  'gamer',
  'pc enthusiast',
  'writer',
  'gamedev'
];

$(document).ready(function () {
    $('.next').click(function () {
            if (section == -1) {
              $('section').addClass('folded');
              $('h1.start').fadeOut('slow');
              $('.next').removeClass('back');
            }
            section++;
            var sections = $('section');
            $('section').removeClass('visible');
            $('html, body').animate({scrollTop: $(sections[section]).offset().top}, 2000, function () {
                $(sections[section]).addClass('visible');
                if (section == sections.length - 1) {
                    section = -1;

                }
                else if (section == sections.length - 2) $('.next').addClass('back');
            });
    });
});

setInterval(function () {
  $('span.dos').text(thingsIAm[ams++]);
  if (ams == thingsIAm.length) ams = 0;
}, 2500);

setInterval(function () {
  $('span.things').text(thingsIMake[things++]);
  if (things == thingsIMake.length) things = 0;
}, 2500);
