$('.review-details').slick({
    
  centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-left left"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right right"></i>',


    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

});


$('#banner-part').slick({
  arrows: false,
  dots: true
});