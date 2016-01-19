var Cube = (function () {
  
  var $window = $(window),
      wW = $window.width(),
      wH = $window.height(),
      cubesXcount = 20,
      cubeWidth = wW / cubesXcount,
      cubesYcount = Math.floor(wH / cubeWidth)+1,
      padding = Math.ceil((cubesYcount - 10) / 2),
      $wrappers,
      $cubes,
      $body = $('.h1 .cubes'),
      
  
  rand = function (min, max) {
    return Math.floor(Math.random()*max + min);
  },
  
  calc = function () {
    wW = $window.width();
    wH = $window.height();
    cubesXcount = 20;
    cubeWidth = wW / cubesXcount;
    cubesYcount = Math.floor(wH / cubeWidth)+1;
  },
  
  resize = function () {
    $wrappers.each(function () {
      $(this).remove();
    });
    $cubes.each(function () {
      $(this).remove();
    });
    calc();
    gen();
  },
  
  addStyles = function () {
    $wrappers.css('width', cubeWidth);
    $wrappers.css('height', cubeWidth);
    $cubes.each(function () {
      $(this).addClass('bg-'+rand(1, 25));
      $(this).addClass('animate-'+rand(1, 4));

      
    });
    
  },
  
  gen = function () {
    var inc = 1,
        kl = 1;
    for (var i = 0; i < cubesYcount; i++) {
      for (var j = 0; j < cubesXcount; j++) {
        var img_class = ((inc >= (20*padding+2))&&(kl <= 200)) ? ('img-'+kl) : '';
        $body.append('<div class="cube-wrapper"><div class="cube '+img_class+' "><span></span></div></div>');
        inc++;
        if ((inc >= (20*padding+2))&&(kl <= 200)) {
          kl++;
        }
      }
    }
    $cubes = $('.cube');
    $wrappers = $('.cube-wrapper');
    addStyles();
  },
  
  impulser = function () {
    
    $cubes.each(function () {
      var time = rand(0, 30000),
          $el = $(this);
      setTimeout(function (){
        if (!($el.hasClass('slider'))) {
          if ($el.hasClass('done')) {
            $el.removeClass('done');
          } else {
            $el.addClass('done');
          }
        }
          }, time);
    });
    
    var time = rand(5000, 30000);
    setTimeout(impulser, time);
  },
  
  openImage = function (s) {
    var k = 5;
    for (var i = 0; i < s.length; i++) {
      var $el = $('.cube-wrapper').eq(s[i]+padding*20),
          interval = (i * 15) - k;
          k += 2;
          //console.log(interval);
      $el.find('.cube').css('transitionDelay', interval+'ms');
      $el.find('.cube').addClass('slider').removeClass('done');
    }
  },
  
  init = function () {
    
    if (wW >= 1024) {
      
      gen();
      
      $window.on('resize', $.throttle(500, resize));
      
      impulser();
      
      setTimeout(function () {
	  console.log('hide remove');
		$('header').removeClass('hide');
		$('nav').removeClass('hide');
        /*$('.h1 h1').find('span').each(function () {
          $(this).removeClass('hide');
        });*/
      }, 1000);
      
      setTimeout(function () {
        openImage([89, 90, 110, 108, 109, 88, 67, 91, 129, 69, 70, 87, 111, 68, 130, 131, 112, 132, 151, 152, 107, 106, 86, 66, 128, 149, 147, 49, 50, 127, 150, 148, 92, 93, 113, 133, 71, 51, 72, 94, 114, 73, 105, 126, 85, 65, 46, 47, 48, 53, 52, 146, 145, 125, 124, 104, 134, 115, 84, 74, 64, 83, 103, 95, 75, 76, 123, 116, 63, 96, 102, 135, 54, 55, 45, 44, 43, 62, 82, 153, 154, 155, 136, 144, 122, 101, 81, 77, 97, 117, 156, 137, 143, 164, 165, 56, 36, 15, 34, 22, 166, 167, 21, 41, 2, 35, 23, 174, 175, 168, 28, 176, 27, 157, 138, 158, 179, 178, 199, 42]);
        $('.h1 h1').find('span').each(function () {
          $(this).addClass('up');
        });
      }, 4500);
      // ----
      /*var test = [];
      $('.cube').on('click', function () {
        var n = $(this).parent().index();
        $(this).parent().css('border', '10px solid red');
        if (!(test.indexOf(n)+1)) {
          test.push(n);
        }
        console.log(test);
      });*/
      // ----
      
    }
    
  };
  
  return { init: init };
  
}());