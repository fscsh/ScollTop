$("#btn").on("click", function(e) {
    e.preventDefault();
    $("body, html").animate({
        scrollTop: 0
    }, 1300);
});
$(document).ready(function() {
    $(window).on("load", function() {
        window.onscroll = function() {
            if (getheight()) {
                // $(".botton").css("display", "flex");
                $(".botton").addClass("show");
                $(".botton").removeClass("hide");
            } else {
                // $(".botton").css("display", "none");
                $(".botton").addClass("hide");
                $(".botton").removeClass("show");

            }
        }
    });
});

function getheight() {
    var box = $(".box");
    var totalhtight = box.last().get(0).offsetTop + Math.floor(box.last().height()) / 2;
    var documentheight = $(document).width();
    var scrollheight = $(window).scrollTop();
    return (totalhtight < documentheight + scrollheight) ? true : false;
};
