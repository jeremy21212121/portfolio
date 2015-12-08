$(function() {

  $('ul').on('init', function(event, slick){
    console.log('slider was initialized');
    $('.slick-current').prev().addClass('prev');
    $('.slick-current').next().addClass('next');
    var array = ['<h2> Project 1 </h2>','<h2> Project 2 </h2>','<h2> Project 3 </h2>','<h2> Project 4 </h2>','<h2> Project 5 </h2>','<h2> Project 6 </h2>',];
    $('.floater').append(array[slick.currentSlide]);
    // console.log(array[slick.currentSlide]);
});

  $('ul').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '50px',
  variableWidth: true
  // onInit: function () {
  //     $('.slick-current').prev().addClass('prev');
  //     $('.slick-current').next().addClass('next');
  // },
  //
  // onBeforeChange: function () {
  //     $('.slick-slide').removeClass('prev next');
  // },
  //
  // onAfterChange: function () {
  //     $('.slick-current').prev().addClass('prev');
  //     $('.slick-current').next().addClass('next');
  // }
})

.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  $('.floater').hide('fast');
  $('.floater h2').remove();
  // $('.slick-slide').removeClass('prev next');
})
.on('afterChange', function(event, slick, currentSlide, nextSlide){
  var array = ['<h2> Project 1 </h2>','<h2> Project 2 </h2>','<h2> Project 3 </h2>','<h2> Project 4 </h2>','<h2> Project 5 </h2>','<h2> Project 6 </h2>',];
  // console.log(array[slick.currentSlide]);
  $('.floater').append(array[slick.currentSlide]);
  $('.floater').show('fast');

  // $('.slick-current').prev().prev().removeClass('prev');
  // $('.slick-current').next().next().removeClass('next');
  $('.slick-current').removeClass('prev next');

  $('.slick-current').prev().addClass('prev');
  $('.slick-current').next().addClass('next');

});

});
