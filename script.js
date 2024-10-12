$(document).mousemove(function (e) {
    $("#bat").stop().animate({ left: e.pageX, top: e.pageY }, 1000);
  });