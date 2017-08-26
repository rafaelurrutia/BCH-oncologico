//VIDEO
var playing = false;
var video = document.getElementById('video-full');

video.onended = function (e) {
    $('#video-full-button i').removeClass("icon-pause").addClass("icon-play-1");
    $('#section-2 .video-full .box-video').removeClass('animated bounceOutLeft bounceInUp');
    $('#section-2 .video-full .box-video').addClass('animated bounceInLeft');
    playing = false;
};


$('#video-full-button').click(function (e) {
    e.preventDefault();

    if (playing == false) {
        video.play();
        $('#section-2 .video-full .box-video').addClass('animated bounceOutLeft');
        $('#video-full-button i').removeClass("icon-play-1").addClass("icon-pause");
        playing = true;
    } else {
        video.pause();
        $('#section-2 .video-full .box-video').removeClass('animated bounceOutLeft bounceInUp');
        $('#section-2 .video-full .box-video').addClass('animated bounceInLeft');
        $('#video-full-button i').removeClass("icon-pause").addClass("icon-play-1");
        playing = false;
    }
});
