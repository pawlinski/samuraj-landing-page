$("#arrow").on("click", function () {
    $("html, body").animate({
        scrollTop: $("main").offset().top
    }, 1200)
})