var swiper = new Swiper('.swiper-carrusel-primero', {
	navigation: {
	  nextEl: '.swiper-button-next-primero',
	  prevEl: '.swiper-button-prev-primero'
	},
	slidesPerView: 1,
	spaceBetween: 10,

	pagination: {
	  el: '.swiper-pagination-primero',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });

var swiperSegundo = new Swiper('.swiper-carrusel-segundo', {
  navigation: {
    nextEl: '.swiper-button-next-segundo',
    prevEl: '.swiper-button-prev-segundo'
  },
slidesPerView: 1,
	spaceBetween: 10,

	pagination: {
	  el: '.swiper-pagination-segundo',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });


var swiperSegundo = new Swiper('.swiper-carrusel-tercero', {
  navigation: {
    nextEl: '.swiper-button-next-tercero',
    prevEl: '.swiper-button-prev-tercero'
  },
slidesPerView: 1,
	spaceBetween: 10,

	pagination: {
	  el: '.swiper-pagination-tercero',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });
