document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const clickSound = document.getElementById("clickSound");

    toggleSwitch.addEventListener("change", function () {
        clickSound.play(); // Play sound on toggle switch click
        if (this.checked) {
            animateDrawing(); // Start solving when switched ON
        } else {
            reset(); // Reset the maze when switched OFF
        }
    });
});
