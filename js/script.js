const points = [234, 2, 234, 10, 266, 10, 266, 42, 282, 42, 282, 10, 298, 10, 298, 26, 346, 26, 346, 10, 426, 10, 426, 26, 410, 26, 410, 74, 394, 74, 394, 58, 362, 58, 362, 90, 378, 90, 378, 106, 346, 106, 346, 138, 362, 138, 362, 122, 442, 122, 442, 138, 458, 138, 458, 170, 442, 170, 442, 202, 426, 202, 426, 218, 458, 218, 458, 234, 474, 234, 474, 282, 458, 282, 458, 250, 442, 250, 442, 234, 426, 234, 426, 250, 410, 250, 410, 266, 394, 266, 394, 314, 378, 314, 378, 282, 314, 282, 314, 298, 282, 298, 282, 314, 298, 314, 298, 330, 282, 330, 282, 346, 314, 346, 314, 362, 298, 362, 298, 378, 282, 378, 282, 362, 266, 362, 266, 378, 250, 378, 250, 394, 218, 394, 218, 442, 202, 442, 202, 394, 170, 394, 170, 378, 138, 378, 138, 410, 122, 410, 122, 426, 154, 426, 154, 442, 122, 442, 122, 474, 138, 474, 138, 458, 170, 458, 170, 442, 186, 442, 186, 474, 218, 474, 218, 458, 234, 458, 234, 474, 250, 474, 250, 482];

const canvas = document.getElementById('canvas'); // Assuming you have a canvas with id 'myCanvas'
const ctx = canvas.getContext('2d');


// Set the desired speed and smoothness control
let speed = 1;  // Controls how fast the lines are drawn (lower = faster)
let steps = 10;  // Controls smoothness of the transition (higher = smoother)
let step = 0;
let shown=false;
let startButton = document.getElementById("gumb");
let resetButton = document.getElementById("gumb2");


function interpolate(x1, y1, x2, y2, step) {
  // Interpolate the coordinates between two points at a given step
  const dx = (x2 - x1) / steps;
  const dy = (y2 - y1) / steps;

  return {
    x: x1 + dx * step,
    y: y1 + dy * step
  };
}

// Function to animate drawing the path
function animateDrawing() {
  console.log("Start button clicked");
  startButton.disabled = true;
  let i = 0;
  let maxIndex = points.length / 2;
  shown = true;

  ctx.beginPath();
  ctx.moveTo(points[0], points[1]);

  function drawLine() {
    if (i < maxIndex - 1) {
      const x1 = points[i * 2];
      const y1 = points[i * 2 + 1];
      const x2 = points[(i + 1) * 2];
      const y2 = points[(i + 1) * 2 + 1];

      step = 0;

      function drawSmoothLine() {
        if (step <= steps && shown == true) {
          const { x, y } = interpolate(x1, y1, x2, y2, step);
          ctx.lineTo(x, y);
          ctx.shadowColor = 'cyan';
          ctx.shadowBlur = 2;
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
          step++;
          requestAnimationFrame(drawSmoothLine);
        } else {
          i++;
          if (i >= maxIndex - 1) {
            document.querySelector(".image").style.background = "url('img/backg.jpeg') center center no-repeat";
            document.querySelector(".image").style.backgroundSize = "cover";
          }
          setTimeout(drawLine, speed);
        }
      }
      drawSmoothLine();
    }
  }
  drawLine();
}


// Set up the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
ctx.lineWidth = 5; // Set the line width
ctx.strokeStyle = '#00f5f5'; // Set the color of the line
ctx.lineCap="round";

// Start the animation
function reset() {
    // Your existing reset() logic here...
    console.log("Reset button clicked");
    startButton.disabled = false; // Re-enable the Start button
  let i = points.length / 2 - 1; // Start from the last point
  shown=false;

          // After all lines are erased, ensure the canvas is cleared
          ctx.clearRect(0, 0, canvas.width, canvas.height);

  eraseLine(); // Start the erasing process
}











