$(document).ready(function(){

    $(".block-showcase-primary").backstretch([
      "images/slides/slide1.png",
      "images/slides/slide2.png",
      "images/slides/slide3.png"
    ], {duration: 3000, fade: 750});

    $('.dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    $('.dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });
});