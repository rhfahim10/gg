$(function(){
// banner
$('.sliderT').slick({
  infinite: true,
  slidesToShow: 10,
  slidesToScroll:1,
  arrows:false,
  autoplay: true,
  autoplaySpeed: 1500,
  speed: 800,
  dots:false,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        arrows: false,
        centerPadding: '0px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: '0px',
        slidesToShow:1
      }
    }
  ]
});

// new class

$(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
       $('.appointment').addClass('appointmentNewClass');
    } else {
       $('.appointment').removeClass('appointmentNewClass');
    }
  });


});