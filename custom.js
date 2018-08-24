$(document).ready(function () {
    var html_body = $('html,body')
        , btn_top = $('.btn_top');
    // Page Loader
    $(window).on('load', function () {
        $(".se-pre-con").fadeOut();;
    });
    // Start btn scroll to top
    if ($(window).scrollTop() > 200) {
        btn_top.fadeIn();
    }
    else {
        btn_top.fadeOut();
    };
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 200) {
            btn_top.fadeIn();
        }
        else {
            btn_top.fadeOut();
        };
    });
    btn_top.on('click', function () {
            html_body.animate({
                scrollTop: 0
            }, 1500);
        })
        // Navbar Add Current Class
    $('.navbar-default .navbar-nav > li > a').on('click', function (e) {
        e.preventDefault();
        var section_id = $(this).attr('href');
        $(this).parent().addClass('current > a').siblings().removeClass('current > a');
        html_body.animate({
            scrollTop: $(section_id).offset().top
        }, 1500);
    });
    // Go To My Portfolio
    $('#header #header_info .my_works').on('click', function () {
        html_body.animate({
            scrollTop: $('#portfolio').offset().top
        }, 1500);
    })
});