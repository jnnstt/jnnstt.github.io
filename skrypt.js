$(document).on('click', '.ma-efekt', function () {
    $(this).toggleClass('powieksz');
});


$(".fullsize").height(window.innerHeight);

$(window).on("resize", function () {
    $(".fullsize").height(window.innerHeight);
})