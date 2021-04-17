function progressLoading() {
    const Body = $('body');
    Body.addClass('preloader-site');
}

function finishLoading() {
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
}