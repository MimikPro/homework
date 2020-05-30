$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:1,
        autoplay:false,
        speed:3000,
        autoplaySpeed:8000,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow:1
                }
            }
        ]
    });
});

