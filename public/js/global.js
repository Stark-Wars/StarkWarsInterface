
window.setTimeout(function(){
$(".loading").fadeOut(500)
},400)

$(document).ready(function(){
	$(window).load(function () {
          $(".mobile-inner-header-icon").click(function(){
            $(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
            $(".mobile-inner-nav").slideToggle(250);
          });
          $(".mobile-inner-nav li").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });
          $(".mobile-inner-nav li").click(function(){
            $(this).find('dl').slideToggle(200)
          })
        });

})

$(document).ready(function(){

$(".section_8 img").each(function( index ) {
            $( this ).css({'animation-delay': (index/10)+'s'});
          });




$('.titlemodel').addClass('wow fadeInUp')






var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();




function height(){
  var sc = $(window).scrollTop();
  if (sc > 200) {
      $("body").addClass("current");
    } else {
      $("body").removeClass("current");
    }
}
height()
$(window).scroll(function () {
  height()
});

$('.right .tabImg .item').click(function(){
  $('.right .tabImg .item').removeClass('current')
  $(this).addClass('current')
})






var floatingImgs = new Swiper('.floatingImgs .swiper-container', {
        autoplay:1, // 自动轮播时间尽可能的小（实际情况而定）

        speed:3000,

        freeMode:true,

        slidesPerView:2,

        loop:true,

        spaceBetween: 10,

});

    var floatingImgs = new Swiper('.floatingImgs2 .swiper-container', {
        autoplay:1, // 自动轮播时间尽可能的小（实际情况而定）

        speed:3000,

        freeMode:true,

        slidesPerView:2,

        loop:true,

        spaceBetween: 2,

    });




});