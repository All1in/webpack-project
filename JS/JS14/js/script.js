$(document).ready(() => {
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    $(".hide-btn").on("click", () => {
        $(".news > .container > .news-list").slideToggle("slow");
    });

    document.addEventListener("scroll", () => {
        if ($(window).scrollTop() > document.documentElement.clientHeight) {
            $(".to-top").removeClass('hidden');
        } else {
            $(".to-top").addClass('hidden');
        }
    });

    $(".to-top").on('click', (e) => {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '500');
    });
});
