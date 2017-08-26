//SCROLLSPY
var sections = $('section'),
    nav = $('#my-nav'),
    nav_height = $('header').outerHeight();


$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').parent().removeClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('active');
        }
    });
});

nav.find('a').on('click', function () {
    var $el = $(this),
        id = $el.attr('href');

    if ($(this).parent().index() == 0) {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: $(id).offset().top - (nav_height -1)
        }, 500);
    }

    return false;
});
