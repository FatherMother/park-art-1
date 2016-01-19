var Helpers = (function () {
  
  var
  
  AutoFont = (function () {
    
    var w = $(window),
        b = $('html'),
        MIN_WIDTH = 768,
        MAX_WIDTH = 1024,
        CUR_FONT = 10,
        
    isTrue = function (ww) {
      return ((ww >= MIN_WIDTH)&&(ww <= MAX_WIDTH));
    },
    
    doSome = function () {
      var windowWidth = w.width();
      if (isTrue(windowWidth)) {
        var newFontSize = (windowWidth) * (CUR_FONT/MIN_WIDTH);
        b.css('fontSize', newFontSize+'px');
      } else {
        
        if (windowWidth > MAX_WIDTH) {
          var newFontSize = (1024) * (CUR_FONT/MIN_WIDTH);
          b.css('fontSize', newFontSize+'px');
        }
        
      }
    },
    
    init = function () {
      doSome();
      w.on('resize', $.throttle(200, doSome));
    };
    
    return { Init: init };
    
  }());
  
  return { AutoFont: AutoFont };
  
}());