// (function($) {
//   // smint navigation
//   $('.main-menu').smint({
//     'scrollSpeed' : 1000,
//     'mySelector'  : 'section'
//   });
// })(jQuery);

$(document).ready(function() {
  // smint navigation
  $('.main-menu').smint({
    'scrollSpeed' : 1000,
    'mySelector'  : 'section, footer'
  });


  $(function() {
    // global properties
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById('canvas_lines');
    var context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 320;

      // ink
      context.strokeStyle = "#eee";
      context.stroke();

      /**
      * Your drawings need to be inside this function otherwise they will be reset when
      * you resize the browser window and the canvas goes will be cleared.
      */
      requestAnimationFrame(function () {
        AnimateLine();
      });
    }
    resizeCanvas();

    var lineDefaults = {
      movePos: {
        x: 20,
        y: 80
      },
      linePos: {
        x: 10,
        y: 80
      }
    }

    function AnimateLine() {

        context.beginPath();
        context.moveTo(lineDefaults.movePos.x, lineDefaults.movePos.y);
        context.lineTo(lineDefaults.linePos.x, lineDefaults.linePos.y);
        // context.lineWidth = 60;
        context.stroke();
        context.closePath();

      lineDefaults.movePos.x++;
      //lineDefaults.linePos.x++;
    // for(i=0; i < 20; i++) {}
      if (lineDefaults.movePos.x) {
        requestAnimationFrame(function () {
          AnimateLine();
        });
      }
    }

    // AnimateLine();

  });
});
