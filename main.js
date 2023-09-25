
function loadWheatleyCrab() {
    const wheatleyCrab = document.getElementById("wheatley-crab")

    fetch("storage/wheatley-crab.txt")
        .then((res) => res.text())
        .then((text) => {
            wheatleyCrab.innerText = text
            wheatleyCrab.innerText += "\nw h e a t l e y  c r a b"
        })
        .catch((e) => console.log(e))

    wheatleyCrab.onclick = function () {
        window.open("https://youtu.be/v47zSNZcyPQ")
    }
}

function initNavbar() {
    $("#navbar").load("navbar.html")
}

window.onload = function () {
    initNavbar()
}