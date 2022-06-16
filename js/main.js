$(document).ready(function(){
  
$('.slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
  
    });


$('.slider__items-bottom').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    slideToScroll: 2,
    responsive:[
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3
          }
        },
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 790,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
        ]
});

});