new CircleType(document.getElementById('rotated'))
  .dir(1)
  .radius(50);
$(window).scroll(function(){
  var offset = $(window).scrollTop();
  offset = offset*0.4;
  $(".circular-text").css({
    "-moz-transform": "rotate("+offset+"deg)",
    "-webkit-transform":"rotate("+offset+"deg)",
    "-o-transform":"rotate("+offset+"deg)",
    "-ms-transform":"rotate("+offset+"deg)",
    "transform":"rotate("+offset+"deg)"
  })
})
