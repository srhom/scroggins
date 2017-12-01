$(document).ready(function() {
$('.slideshow').slick({
    //dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1
});
    
$('.sponsors').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$(function() {
    $( '#dl-menu' ).dlmenu({
        animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
    });
});

/*
 $('.scrollto').on('click', function(e) {
    e.preventDefault();
    var targetContent = ( $(this).attr('data-target') ) ? $(this).data("target") : $(this.hash);
    $("body,html").stop(true).scrollTo(targetContent, {duration:1000, interrupt:false});
});
*/

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 600) {
        $("#scroll-top-top").fadeOut();
    } else {
        $("#scroll-top-top").fadeIn();
    }
});

$(window).on("scroll", function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos <= 100) {
        $(".arrow").fadeIn();
    } else {
        $(".arrow").fadeOut();
    }
});

$(".hoverLink").mouseenter(function(){
    var title = $(this).attr('rel');
    var content = $(this).html();
    var parent = $(this).parent();
    var xpos = $(this).position().left;
      xpos = xpos + 10;
    var ypos = $(this).position().top;
      ypos = ypos + 10;
    $(this).css({'z-index' : '25'});
    parent.append(" <div id='lureInfo' style='top: " + ypos + "px; left: " + xpos + "px;'><h4>" + title + "</h4><p>" + content + "</p></div>" );}).mouseleave(function(){
    $("#lureInfo").remove();
    $(this).css({'z-index' : '15'});
});

if ($("body.home").length) {
        $('<div class="arrow bounce"><a href="#big-eats" data-target="200" class="scrollto" style="color:#fff;"><i class="fa fa-angle-down"></i></a></div>').appendTo('body.home').css('top',$('.wrapper').position().top + $('header').outerHeight(true) - 150);}
        
$(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

});