/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );



function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, handler);
  }
  return false;
}
function scrollDirection(){
  var weelEvt = (/Firefox/i.test(navigator.userAgent)) ? 'DOMMouseScroll' : 'mousewheel',
      el = document.body;
  addEvent(el, weelEvt, function(e){
    var evt = e.originalEvent ? e.originalEvent : e,
    delta = evt.detail ? evt.detail*(-40) : evt.wheelDelta
    console.log('Скроллим ' + (delta > 0 ? 'вверх' : 'вниз'));
    
    var topoffset = $('.handle').offset().top;
    if (delta < 0 && topoffset == 0) {
      $('.corner, #header').css('display', 'none');
      $('#hand, #menuSVG').css('display', 'none');
      $('.navbar').css('display', 'none');
      $('#to-top').css('z-index', '9999999');

      href = document.location.href;
      if (href == 'http://up-nav-do/#slide1' || href == 'http://up-nav-do/') {
        $('#go1').click();
      };
      if (href == 'http://up-nav-do/#slide2') {
        $('#go3').click();
      };
      if (href == 'http://up-nav-do/#slide3') {
        $('#go4').click();
      };
      if (href == 'http://up-nav-do/#slide4') {
        $('#go2').click();
      };
    };


    var firstTop = $('.content').offset().top;

    if (delta > 0 && firstTop == 0 ) {
      $('.corner, .content-switch').css('display', 'block');
      $('#hand, #menuSVG').css('display', 'block');
      $('.navbar').css('display', 'block');
      $('#to-top').css('z-index', '9');
        href = document.location.href;
        if (href == 'http://up-nav-do/#slide1' || href == 'http://up-nav-do/') {
          $('#go1').click();
        };
        if (href == 'http://up-nav-do/#slide2') {
          $('#go3').click();
        };
        if (href == 'http://up-nav-do/#slide3') {
          $('#go4').click();
        };
        if (href == 'http://up-nav-do/#slide4') {
          $('#go2').click();
        };
      };


      var firstTop = $('.content').offset().top;



  });

}

$(document).ready(function() {
  $(function(){
  scrollDirection();
});
});



