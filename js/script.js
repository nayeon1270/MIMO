$('#header .top_nav strong').on({mouseover:function(){
    $('#header .top_nav ul').stop().slideDown();
}, mouseout:function(){
    $('#header .top_nav ul').stop().slideUp();
}})

$('.hidden_menu_bu').click(function(){
    $('.top_area_wrap').stop().slideDown();
    $('body, html').css('overflow', 'hidden')
})

$('.closeBtn').click(function(){
    $('.top_area_wrap').stop().slideUp();
    $('body, html').css('overflow', 'visible')
})


// let main_visualOffest=$('.main_visual').offset().top;
// console.log(main_visualOffest)
// $(window).scroll(function(){
//     let sct=$(window).scrollTop();

//     if(sct > main_visualOffest -150){
//         $('.txt1 open').css({width:'50px', position:'fixed'});
//    }else if(sct < main_visualOffest -150){
//         $('.txt1 open').css({width:'300px', position:'absolute'});
//    }
// })
$('.swiper').each(function(index) {

  
    let swiper = new Swiper( '.swiper', {
      autoplay: {
        delay: 0, //add
        disableOnInteraction: false,
      },
      speed: 5000,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 5,
    });
  });