$(function () {
    $("#hls_nav_button01").find("li.nav-item").mouseover(function () {
       $(this).addClass("show");
        $(this).children("div").addClass("show");
    });
    $("#hls_nav_button01").find("li.nav-item").mouseout(function () {
        $(this).removeClass("show");
        $(this).children("div").removeClass("show");
    });

    $("#hls_news_pic").find("ol.carousel-indicators").children("li").mouseover(function () {
           $(this).trigger("click");
    });
    $("#beaut_carousel").find("ol.carousel-indicators").children("li").mouseover(function () {
        $(this).trigger("click");
    })
});