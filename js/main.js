//main
//main
/*mbl-nav*/
$(".mbl-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".close-mbl-nav-c").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    })
});
/*$(".mbl-nav .box").click(function (e) {
    e.stopPropagation();
});*/
$(".mbl-dot-nav-opener").click(function () {
    $(".mbl-nav").addClass("mbl-nav-opened");
    $("body").addClass("lock");
    $(".mbl-nav-opened").bind("click", function () {
        $(".mbl-nav").removeClass("mbl-nav-opened");
        $("body").removeClass("lock");
    });
});
/*
var x = document.getElementById("audioBackground");
x.play();
$(document).ready(function () {

    $(x).on('load', function () {

    });
});
*/