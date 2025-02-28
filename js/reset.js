function reset() {
    console.log("Reset button clicked");
    startButton.disabled = false; // Re-enable the Start button
    shown = false;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Reset background to back2.jpeg
    let bg = document.querySelector(".image");
    bg.style.background = "url('img/backg2.jpg') center center no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.filter = "blur(5px)"; // Reapply blur if needed
}