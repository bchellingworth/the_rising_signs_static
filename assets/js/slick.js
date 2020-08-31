$(document).on('turbolinks:load ready', function () {

    $('.collaborators-slides').slick({
        centerMode: true,
        centerPadding: '175px',
        slidesToShow: 3,
        nextArrow: document.getElementById('collaboratorNext'),
        prevArrow: document.getElementById('collaboratorPrevious'),
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    centerPadding: '10px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });

});