var section = 0;

$(document).ready(function () {
    $('.next').click(function () {
            section++;
            if (section == 0) $('.next').removeClass('back');
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
