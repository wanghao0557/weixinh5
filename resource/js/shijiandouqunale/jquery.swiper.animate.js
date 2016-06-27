function swiperAnimateCache(){
  var allBoxes=$('.ani');
  for(var i=0; i<allBoxes.length; i++){
    $(allBoxes[i]).attr('style')? $(allBoxes[i]).attr('swiper-animate-style-cache', $(allBoxes[i]).attr('style')) : '';
    $(allBoxes[i]).css({'visibility':'hidden'});
  }
}

function swiperAnimate(a){
  clearSwiperAnimate();
  var b=a.slides[a.activeIndex].querySelectorAll(".ani");
  for(var i=0; i<b.length; i++){
    $(b[i]).css({'visibility':'visible'});
    var getStyle=$(b[i]).attr('style');
    var duration=$(b[i]).attr('swiper-animate-duration')? $(b[i]).attr('swiper-animate-duration') : '';
    var effect=$(b[i]).attr('swiper-animate-effect');
    var delay=$(b[i]).attr('swiper-animate-delay')? $(b[i]).attr('swiper-animate-delay') : '';
    if(effect){
      $(b[i]).addClass('animated '+effect);
      $(b[i]).css({'animation-duration':duration, '-webkit-animation-duration':duration, 'animation-delay':delay, '-webkit-animation-delay':delay});
    }else{
      var beginEffect=$(b[i]).attr('swiper-animate-begin-effect')? $(b[i]).attr('swiper-animate-begin-effect') : '';
      var endEffect=$(b[i]).attr('swiper-animate-end-effect')? $(b[i]).attr('swiper-animate-end-effect') : '';
      $(b[i]).addClass('animated ' +beginEffect);
      $(b[i]).css({'animation-duration':duration, '-webkit-animation-duration':duration, 'animation-delay':delay, '-webkit-animation-delay':delay});
      function launchEndEffect(obj, time){
        setTimeout(function(){obj.removeClass(beginEffect).addClass(endEffect).css({'animation-delay':obj.attr('swiper-animate-next-delay'), '-webkit-animation-delay':obj.attr('swiper-animate-next-delay')})}, time);
      }
      launchEndEffect($(b[i]), parseInt($(b[i]).data('timer')));
    }
  }
}

function clearSwiperAnimate(){
  var allBoxes=$('.ani');
  for(var i=0; i<allBoxes.length; i++){
    $(allBoxes[i]).css($(allBoxes[i]).attr('swiper-animate-style-cache'));
    $(allBoxes[i]).css({'visibility':'hidden'});
    var effect=$(allBoxes[i]).attr('swiper-animate-effect');
    if(effect){
      $(allBoxes[i]).removeClass('animated '+effect);
    }else{
      var beginEffect=$(allBoxes[i]).attr('swiper-animate-begin-effect')? $(allBoxes[i]).attr('swiper-animate-begin-effect') : '';
      var endEffect=$(allBoxes[i]).attr('swiper-animate-end-effect')? $(allBoxes[i]).attr('swiper-animate-end-effect') : '';
      $(allBoxes[i]).removeClass('animated '+beginEffect+' '+endEffect)
    }
  }
}
