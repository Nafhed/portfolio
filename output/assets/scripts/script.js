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
    'mySelector'  : 'section'
  });


  $(function() {
    // global properties
    var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById('canvas_lines');
    var context = canvas.getContext('2d');

    var circles = new Array();

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 640;

      // ink
      context.strokeStyle = "#eee";
      context.stroke();

      /**
      * Your drawings need to be inside this function otherwise they will be reset when
      * you resize the browser window and the canvas goes will be cleared.
      */
      requestAnimationFrame(function () {
        draw();
      });
    }
    resizeCanvas();

    function Circle(radius, speed, width, xPos, yPos) {
      this.radius = radius;
      this.speed = speed;
      this.width = width;
      this.xPos = xPos;
      this.yPos = yPos;
      this.opacity = .05 + Math.random() * .5;

      this.counter = 0;

      var signHelper = Math.floor(Math.random() * 2);

      if (signHelper == 1) {
        this.sign = -1;
      } else {
        this.sign = 1;
      }
    }

    Circle.prototype.update = function () {

      this.counter += this.sign * this.speed;

      context.beginPath();

      context.arc(this.xPos + Math.cos(this.counter / 100) * this.radius,
      this.yPos + Math.sin(this.counter / 100) * this.radius,
      this.width,
      0,
      Math.PI * 2,
      false);

      context.closePath();

      context.fillStyle = 'rgba(185, 211, 238,' + this.opacity + ')';
      context.fill();
    };

    function drawCircles() {
      for (var i = 0; i < 20; i++) {
        var randomX = Math.round(-200 + Math.random() * 700);
        var randomY = Math.round(-200 + Math.random() * 700);
        var speed = .2 + Math.random() * 3;
        var size = 5 + Math.random() * 100;

        var circle = new Circle(100, speed, size, randomX, randomY);
        circles.push(circle);
      }
      draw();
    }
    drawCircles();

    function draw() {
      context.clearRect(0, 0, 1000, 1000);

      for (var i = 0; i < circles.length; i++) {
        var myCircle = circles[i];
        myCircle.update();
      }
      requestAnimationFrame(draw);
    }

  });
});
