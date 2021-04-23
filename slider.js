// import Swiper from 'swiper'

new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  breakpoints:{
    768:{    
      slidesPerView: 1.5,
      spaceBetween: 50,
    }
  }
})
