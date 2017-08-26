//ANIMACIONES
function addClassDelay(classParent, classChild, classAnimation, delay) {
    var i = 0;
    var count = $(classParent + ' ' + classChild).length;
    var myInterval = setInterval(function () {
        $(classParent + ' ' + classChild).eq(i).addClass(classAnimation);
        if (i == count) {
            clearInterval(myInterval);
        }
        i++;
    }, delay);

}

addClassDelay('.menuprincipal ul', 'li', 'animated fadeInLeft', 250);


$('#section-1').waypoint(function () {
    $('.rotateBounce').removeClass('link_to_top');
}, {
    offset: '0%'
});


$('#section-2').waypoint(function () {
    $('.rotateBounce').removeClass('link_to_top');
}, {
    offset: '100%'
});


$('#section-2').waypoint(function () {
    //addClassDelay("#section-2 .seccion", ".owl-item", "animated fadeInLeft", 250);
    $('#section-2 h3').addClass('animated fadeInUp');
    $('#section-2 h4').addClass('animated fadeInUp');
    
    //$('#section-2 .seccion').addClass('animated fadeInLeft');
}, {
    offset: '80%'
});

$('#section-3').waypoint(function () {
    $('.rotateBounce').addClass('link_to_top');
    $('#section-3 .container').addClass('animated fadeInUp');
}, {
    offset: '100%'
});

$('#section-3 .container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $('#section-3 .seccion').addClass('animated fadeInLeft');
    $('#section-3 h3').addClass('animated fadeInUp');
    $('#section-3 h4').addClass('animated fadeInUp');
});


$('#section-4').waypoint(function () {
    $('#section-4 .container').addClass('animated fadeInRight');
}, {
    offset: '100%'
});

$('#section-4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $('#section-4 h3').addClass('animated fadeInUp');
    $('#section-4 h4').addClass('animated fadeInUp');
});

$('#section-5').waypoint(function () {
    $('#section-5 .container').addClass('animated fadeInRight');
}, {
    offset: '100%'
});
