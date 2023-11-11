$(document).ready(function () {

    $(".fancybox").fancybox({
        helpers: {
            media: true
        },
        youtube: {
            autoplay: 1
        }
    }).trigger("click");
});
