document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".title");

    title.addEventListener("click", function (event) {
        if (event.target.textContent.includes("E") && event.offsetX < 30) { 
            credits();
        }
    });
});

function credits() {
    Swal.fire({
        position: "top-right",
        title: 'Info',
        text: 'Made by: Matias Čečko 4. RB, 2025',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: "#000000",
        customClass: {
            popup: 'small-alert'
        }
    });
}
