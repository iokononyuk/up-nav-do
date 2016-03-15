

/* Меняем цвет верхнего меню в зависимости от страницы START */
$(document).ready(function() {
	if ($('body').width() < 768) {
		// $('.navbar').addClass('menu-scroll')
	};
});
$(document).ready(function() {
	$('#svg').click(function() {
		$('.navbar-nav > li > a').removeClass('three-menu');
	});
});
function colorNav() {
	var url = document.location.href;

    var devUrl = 'http://up-nav-do/';

	if (url == devUrl+'#slide2') {
        $('#hand path').css('fill', '#2d2b2b');
		$('#logo path').css('fill', '#2d2b2b');
		$('#svg path').css('stroke', '#2d2b2b');
		$('#logo polygon').css('fill', '#2d2b2b');
		$('#corner-img polygon').css('stroke', '#2d2b2b');
		$('.navbar-nav > li > a').addClass('three-menu');
        $('.navbar-nav > li > a').hover(function() {
            $(this).css('color', '#564E4E !important');
        });
        $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
            $('.header-popup').css('background', '#ffd600');
            $('.menu-scroll').css('border-bottom', '2px solid #ffd600');
	} else {
        $('#hand path').css('fill', '#fff');
		$('#logo path, #logo polygon').css('fill', '#fff');
		$('.navbar-nav > li > a').removeClass('three-menu');
		$('#corner-img polygon').css('stroke', '#fff');
        $('#svgPhone path,#svgPhone rect').css('fill', '#fff');
		$('#svg path').css('stroke', '#fff');
            $('.navbar').css('border', 'none');
	}
	if (url == devUrl+'#slide2') {
		if ($('.navbar').hasClass('menu-scroll')) {
			$('.menu-scroll #logo polygon').css('fill', '#ffd600');
            $('.header-popup').css('background', '#ffd600');
            $('.menu-scroll').css('border-bottom', '4px solid #ffd600');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
		} else {
			$('#logo polygon').css('fill', '#2d2b2b');
            $('.navbar').css('border', 'none');
		};
	};
	if (url == devUrl+'#slide4') {
		if ($('.navbar').hasClass('menu-scroll')) {
			$('.menu-scroll #logo polygon').css('fill', '#EF7622');
            $('.header-popup').css('background', '#EF7622');
            $('.menu-scroll').css('border-bottom', '4px solid #EF7622');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
		} else {
			$('#logo polygon').css('fill', '#fff');
            $('.navbar').css('border', 'none');
		};
	};
	if (url == devUrl+'#slide3') {
		if ($('.navbar').hasClass('menu-scroll')) {
			$('.menu-scroll #logo polygon').css('fill', '#019D35');
            $('.header-popup').css('background', '#019D35');
            $('.menu-scroll').css('border-bottom', '4px solid #019D35');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
		} else {
			$('#logo polygon').css('fill', '#fff');
            $('.navbar').css('border', 'none');
		};
	};
	if (url == devUrl+'#slide1') {
		
    $('#phone').html('(050) 179-18-12');
		if ($('.navbar').hasClass('menu-scroll')) {
			$('.menu-scroll #logo polygon').css('fill', '#1581af');
            $('.header-popup').css('background', '#1581af');
            $('.menu-scroll').css('border-bottom', '4px solid #1581af');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
		} else {
			$('#logo polygon').css('fill', '#fff');
            $('.navbar').css('border', 'none');
		};
	};

    var marginF = $('#nav-item-1').width();
    if (url == devUrl || url == devUrl+'#slide1') {
        $('.active-a').html('Обучение');
        $('#site-nav .active-a').css({
            'left': '0px'
        });
    };
    if (url == devUrl+'#slide2') {
        $('.active-a').html('Литература');
        $('#site-nav .active-a').css({
            'left': '114px'
        });
        $('#phone').html('(063) 829-97-05');

    };
    if (url == devUrl+'#slide3') {
        $('.active-a').html('Оптика');
        $('#site-nav .active-a').css({
            'left': '238px'
        });
    $('#phone').html('(073) 466-28-77');
    };
    if (url == devUrl+'#slide4') {
        $('.active-a').html('Импланты');
        $('#site-nav .active-a').css({
            'left': '330px'
        }); 
    $('#phone').html('(073) 466-28-77');
    };
}

$('body').mousemove(colorNav);
$(window).on('keydown', function(event) {
    var url = document.location.href;

    var devUrl = 'http://kononyuk.xyz/up-nav-do/';

    if (url == devUrl+'#slide2') {
        $('#hand path').css('fill', '#2d2b2b');
        $('#logo path').css('fill', '#2d2b2b');
        $('#svg path').css('stroke', '#2d2b2b');
        $('#logo polygon').css('fill', '#2d2b2b');
        $('#corner-img polygon').css('stroke', '#2d2b2b');
        $('.navbar-nav > li > a').addClass('three-menu');
        $('.navbar-nav > li > a').hover(function() {
            $(this).css('color', '#564E4E !important');
        });
        $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
            $('.header-popup').css('background', '#ffd600');
            $('.menu-scroll').css('border-bottom', '2px solid #ffd600');
    } else {
        $('#hand path').css('fill', '#fff');
        $('#logo path, #logo polygon').css('fill', '#fff');
        $('.navbar-nav > li > a').removeClass('three-menu');
        $('#corner-img polygon').css('stroke', '#fff');
        $('#svgPhone path,#svgPhone rect').css('fill', '#fff');
        $('#svg path').css('stroke', '#fff');
            $('.navbar').css('border', 'none');
    }
    if (url == devUrl+'#slide2') {
        if ($('.navbar').hasClass('menu-scroll')) {
            $('.menu-scroll #logo polygon').css('fill', '#ffd600');
            $('.header-popup').css('background', '#ffd600');
            $('.menu-scroll').css('border-bottom', '4px solid #ffd600');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
        } else {
            $('#logo polygon').css('fill', '#2d2b2b');
            $('.navbar').css('border', 'none');
        };
    };
    if (url == devUrl+'#slide4') {
        if ($('.navbar').hasClass('menu-scroll')) {
            $('.menu-scroll #logo polygon').css('fill', '#EF7622');
            $('.header-popup').css('background', '#EF7622');
            $('.menu-scroll').css('border-bottom', '4px solid #EF7622');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
        } else {
            $('#logo polygon').css('fill', '#fff');
            $('.navbar').css('border', 'none');
        };
    };
    if (url == devUrl+'#slide3') {
        if ($('.navbar').hasClass('menu-scroll')) {
            $('.menu-scroll #logo polygon').css('fill', '#019D35');
            $('.header-popup').css('background', '#019D35');
            $('.menu-scroll').css('border-bottom', '4px solid #019D35');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
        } else {
            $('#logo polygon').css('fill', '#fff');
            $('.navbar').css('border', 'none');
        };
    };
    if (url == devUrl+'#slide1') {
        
        if ($('.navbar').hasClass('menu-scroll')) {
            $('.menu-scroll #logo polygon').css('fill', '#1581af');
            $('.header-popup').css('background', '#1581af');
            $('.menu-scroll').css('border-bottom', '4px solid #1581af');
            $('#svgPhone path,#svgPhone rect').css('fill', '#010002');
        } else {
            $('#logo polygon').css('fill', '#fff');
            $('.navbar').css('border', 'none');
        };
    };

    var marginF = $('#nav-item-1').width();
    if (url == devUrl || url == devUrl+'#slide1') {
        $('.active-a').html('Обучение');
        $('#site-nav .active-a').css({
            'left': '0px'
        });
    };
    if (url == devUrl+'#slide2') {
        $('.active-a').html('Литература');
        $('#site-nav .active-a').css({
            'left': '114px'
        });

    };
    if (url == devUrl+'#slide3') {
        $('.active-a').html('Оптика');
        $('#site-nav .active-a').css({
            'left': '238px'
        });
    };
    if (url == devUrl+'#slide4') {
        $('.active-a').html('Импланты');
        $('#site-nav .active-a').css({
            'left': '330px'
        });
    };
});
/* Меняем цвет верхнего меню в зависимости от страницы END */

(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").fadeOut('400');
                $(tabs).children("div").children("div").eq(i).fadeIn('400');
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});


$(document).ready(function() {
    $('#menuSVG').click(function(event) {
        $(this).parent().toggleClass('chross');
        $('.slider-switch').click();

        if ($(this).parent().hasClass('chross')) {
            // $('path:nth-child(2)',this).hide();
            // $('path:nth-child(1)',this).attr({"d": "M 12.972944,50.936147 51.027056,12.882035"});
            // $('path:nth-child(3)',this).attr({"d": "M 12.972944,12.882035 51.027056,50.936147"});
        } else {
            // $('path:nth-child(2)',this).show();
            // $('path:nth-child(1)',this).attr({"d": "m 5.0916789,20.818994 53.8166421,0"});
            // $('path:nth-child(3)',this).attr({"d": "m 5.0916788,42.95698 53.8166422,0"});
        }
    });
});

// function timeIndication() {
//     var durationSlide = 10000;
//     var slideItemId = $('.current').data('id');

//     $('.time').animate({
//         'width': '100%'},
//         durationSlide, function() {
//         $('.time').width(0);
//         slideshow.dd.setStep(slideItemId);
//     });

// }


function topMenu() {
  var scrollingTop = $('body').scrollTop();
  if (scrollingTop > 900) {
    alert(scrollingTop);
      // $('.navbar-fixed-top').addClass('menu-scroll');
  } else {
      // $('.navbar-fixed-top').removeClass('menu-scroll');
  };
  
}



function bodyTop () {
	var offetBody = $('body').scrollTop();
	// alert(offetBody);
	if ($('.content').hasClass('show')) {
		// alert('has');
	};
}

$('body').scroll(bodyTop);
$(document).ready(bodyTop);

$(document).ready(function() {
    $('.event-all').hide();
    $('.ev-ua').click(function(event) {
        $('.ev-all').removeClass('active');
        $(this).addClass('active');
       $('.event-all').fadeOut('400', function() {
           $('.event-ukraine').fadeIn('400');
       });
    });
    $('.ev-all').click(function(event) {
        $('.ev-ua').removeClass('active');
        $(this).addClass('active');
        $('.event-ukraine').fadeOut('400', function() {
           $('.event-all').fadeIn('400');
       });
    });
});

// $(document).ready(function() {
//     $('#menuSVG').click(function(event) {
//         $('body').toggleClass('small-menu');
//     });
// });


$(document).ready(function() {
    $('#to-top').click(function(event) {
      $('.corner, .content-switch').css('display', 'block');
      $('#hand, #menuSVG').css('display', 'block');
      $('.navbar').css('display', 'block');
        // $(this).css('display', 'none');
        href = document.location.href;
        if (href == 'http://kononyuk.xyz/up-nav-do/#slide1' || href == 'http://kononyuk.xyz/up-nav-do/') {
          $('#go1').click();
        };
        if (href == 'http://kononyuk.xyz/up-nav-do/#slide2') {
          $('#go3').click();
        };
        if (href == 'http://kononyuk.xyz/up-nav-do/#slide3') {
          $('#go4').click();
        };
        if (href == 'http://kononyuk.xyz/up-nav-do/#slide4') {
          $('#go2').click();
        };
    });
});

jQuery(document).ready(function(){
    var modalTriggerBts = $('a[data-type="cd-modal-trigger"]'),
        coverLayer = $('.cd-cover-layer');
    
    /*
        convert a cubic bezier value to a custom mina easing
        http://stackoverflow.com/questions/25265197/how-to-convert-a-cubic-bezier-value-to-a-custom-mina-easing-snap-svg
    */
    var duration = 600,
        epsilon = (1000 / 60 / duration) / 4,
        firstCustomMinaAnimation = bezier(.63,.35,.48,.92, epsilon);

    modalTriggerBts.each(function(){
        initModal($(this));
    });

    function initModal(modalTrigger) {
        var modalTriggerId =  modalTrigger.attr('id'),
            modal = $('.cd-modal[data-modal="'+ modalTriggerId +'"]'),
            svgCoverLayer = modal.children('.cd-svg-bg'),
            paths = svgCoverLayer.find('path'),
            pathsArray = [];
        //store Snap objects
        pathsArray[0] = Snap('#'+paths.eq(0).attr('id')),
        pathsArray[1] = Snap('#'+paths.eq(1).attr('id')),
        pathsArray[2] = Snap('#'+paths.eq(2).attr('id'));

        //store path 'd' attribute values   
        var pathSteps = [];
        pathSteps[0] = svgCoverLayer.data('step1');
        pathSteps[1] = svgCoverLayer.data('step2');
        pathSteps[2] = svgCoverLayer.data('step3');
        pathSteps[3] = svgCoverLayer.data('step4');
        pathSteps[4] = svgCoverLayer.data('step5');
        pathSteps[5] = svgCoverLayer.data('step6');
        
        //open modal window
        modalTrigger.on('click', function(event){
            event.preventDefault();
            modal.addClass('modal-is-visible');
            coverLayer.addClass('modal-is-visible');
            animateModal(pathsArray, pathSteps, duration, 'open');
        });

        //close modal window
        modal.on('click', '.modal-close', function(event){
            event.preventDefault();
            modal.removeClass('modal-is-visible');
            coverLayer.removeClass('modal-is-visible');
            animateModal(pathsArray, pathSteps, duration, 'close');
        });
    }

    function animateModal(paths, pathSteps, duration, animationType) {
        var path1 = ( animationType == 'open' ) ? pathSteps[1] : pathSteps[0],
            path2 = ( animationType == 'open' ) ? pathSteps[3] : pathSteps[2],
            path3 = ( animationType == 'open' ) ? pathSteps[5] : pathSteps[4];
        paths[0].animate({'d': path1}, duration, firstCustomMinaAnimation);
        paths[1].animate({'d': path2}, duration, firstCustomMinaAnimation);
        paths[2].animate({'d': path3}, duration, firstCustomMinaAnimation);
    }

    function bezier(x1, y1, x2, y2, epsilon){
        //https://github.com/arian/cubic-bezier
        var curveX = function(t){
            var v = 1 - t;
            return 3 * v * v * t * x1 + 3 * v * t * t * x2 + t * t * t;
        };

        var curveY = function(t){
            var v = 1 - t;
            return 3 * v * v * t * y1 + 3 * v * t * t * y2 + t * t * t;
        };

        var derivativeCurveX = function(t){
            var v = 1 - t;
            return 3 * (2 * (t - 1) * t + v * v) * x1 + 3 * (- t * t * t + 2 * v * t) * x2;
        };

        return function(t){

            var x = t, t0, t1, t2, x2, d2, i;

            // First try a few iterations of Newton's method -- normally very fast.
            for (t2 = x, i = 0; i < 8; i++){
                x2 = curveX(t2) - x;
                if (Math.abs(x2) < epsilon) return curveY(t2);
                d2 = derivativeCurveX(t2);
                if (Math.abs(d2) < 1e-6) break;
                t2 = t2 - x2 / d2;
            }

            t0 = 0, t1 = 1, t2 = x;

            if (t2 < t0) return curveY(t0);
            if (t2 > t1) return curveY(t1);

            // Fallback to the bisection method for reliability.
            while (t0 < t1){
                x2 = curveX(t2);
                if (Math.abs(x2 - x) < epsilon) return curveY(t2);
                if (x > x2) t0 = t2;
                else t1 = t2;
                t2 = (t1 - t0) * .5 + t0;
            }

            // Failure
            return curveY(t2);

        };
    };
});



function animHand () {
    $('#hand').animate({
        'right': '95px'},
        2000, function() {
        $('#hand').css('right', 15);
    });
}
setInterval(animHand, 2000);


$('#footer-blue, #footer-orange, #footer-green, #footer-yellow, #modal-form').submit(function(event) {

    var dataForm = [];
    var sourse = $('#sourse').val();

    // var book = $('#bookname').val();

    $('input',this).each(function(index, el) {
        if ($('#bookname').val() == '') {
            $('#bookname').val('text');
        };
        dataForm.push($(this).val());
    });
        dataForm.push(sourse);
        // dataForm.push(book);

    alert(dataForm);

    $.post('mail.php', {dataForm: dataForm}, function(data, textStatus, xhr) {
        alert(data);
        $('input').each(function(index, el) {
            $(this).val('');
        });
    });
    
});

$(document).ready(function() {
    $('.navbar-nav > li > a').click(function(event) {
        if ($(window).width() <769) {$('.navbar-toggle').click();};
    });
    $('#to-top').click(function(event) {
        $(this).toggleClass('normal');
    });
});

$('#back-1').click(function(event) {
    $('#go1').click();
      $('.corner, .content-switch').css('display', 'block');
      $('#menuSVG, #hand').css('display', 'block');
      $('.navbar').css('display', 'block');
});
$('#back-2').click(function(event) {
    $('#go2').click();
      $('.corner, .content-switch').css('display', 'block');
      $('#menuSVG, #hand').css('display', 'block');
      $('.navbar').css('display', 'block');
});
$('#back-3').click(function(event) {
    $('#go3').click();
      $('.corner, .content-switch').css('display', 'block');
      $('#menuSVG, #hand').css('display', 'block');
      $('.navbar').css('display', 'block');
});
$('#back-4').click(function(event) {
    $('#go4').click();
      $('.corner, .content-switch').css('display', 'block');
      $('#menuSVG, #hand').css('display', 'block');
      $('.navbar').css('display', 'block');
});


$(document).ready(function() {
    $('.button-yellow-text').click(function(event) {
        var BookName = $(this).prev('p').html();
        $('#bookname').val(BookName);
    });
});

function butColor () {
    var bg = $('.current').data('color');

    $('#send-modal-form').css('background',bg);
}
$('body').mousemove(butColor);


$('#cat1').click(function() {
    var target = $(this).data('link');
    $('.pages').animate({scrollTop: $(target).position().top }, 800);
    return false; 
});