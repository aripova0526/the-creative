$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show');
    $('.list-items').toggleClass('show-menu');
});
$('.list-items a').on('click', function () {
    $('.list-items').removeClass('show-menu');
    $('.mobile-btn').removeClass('show');
});