 $(document).ready(function () {
$('.customer-slider').slick({
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    
    prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-arrow-right"></i></span>',
    slidesToScroll:3,
    responsive: [
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 2,
               
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.recent-project-slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll:5,
    autoplay: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '10px',
                slidesToShow: 1
            }
        }
    ]
});

 $('.news-slider').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
     infinite: true,    
    dots: true,
    slidesToScroll: 1,
    prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="fas fa-arrow-right"></i></span>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1
            }
        }
    ]
    });

    $('.testimonial-slider').slick({
        // centerMode: true,
        // infinite:false,
        centerPadding: '10px',
        slidesToShow: 3,
        arrows: true,
        // variableWidth: true,
        dots: true,
        slidesToScroll: 1,
        prevArrow: '<span class="prev"><i class="fas fa-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="fas fa-arrow-right"></i></span>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    // infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});