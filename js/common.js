window.addEventListener("load", function () {
	$('body').addClass('load');
});

$(document).ready(function () {
	$('head').append('');
	$('head').prepend('');

	if ($(".swiper1").length > 0) {
		var swiper = new Swiper(".swiper1", {
			loop: true,
			autoplay: {
				delay: 1000,
			},
		});
	}

	if ($(".swiper2").length > 0) {
		var swiper = new Swiper(".swiper2", {
			spaceBetween: 30,
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination2",
				clickable: true,
			},
			breakpoints: {
				1000: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				750: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
			}
		});
	}

	if ($(".swiper3").length > 0) {
		var swiper = new Swiper(".swiper3", {
			spaceBetween: 30,
			slidesPerView: 1,
			pagination: {
				el: ".swiper-pagination3",
				clickable: true,
			},
			breakpoints: {
				1000: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
				750: {
					spaceBetween: 30,
					slidesPerView: 2,
				},
			}
		});
	}

	//Плавный скролл до блока .div по клику на .scroll

	$('a[data-target="anchor"]').on('click', function () {
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top - 100;
		$('body, html').animate({ scrollTop: bl_top }, 700);
		$('.toggle').removeClass('active');
		$('body').removeClass('body-overflow');
		$('.header__nav').fadeOut();
		return false;
	});

	$(".groups-item__title").on('click', function (e) {
		$(this).toggleClass('active');
		$(this).next('.groups-item__block').slideToggle();
	});

	// Конпка вверх
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});

	$('#toTop').click(function () {
		$('body,html').animate({ scrollTop: 0 }, 800);
	});

	if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
		document.body.classList.add('no-touch');
	}

	$('.toggle').on('click', function () {
		$(this).toggleClass('active');
		$('body').toggleClass('body-overflow');
		$('.header__nav').fadeToggle();
	});

	var trainer = document.getElementById('trainer-bg1');
	var parallaxInstance = new Parallax(trainer);

	var trainer = document.getElementById('trainer-bg2');
	var parallaxInstance = new Parallax(trainer);

});