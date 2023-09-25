function loadWheatleyCrab() {
    fetch("storage/wheatley-crab.txt")
        .then((res) => res.text())
        .then((text) => {
            document.getElementById("wheatley-crab").innerText = text
        })
        .catch((e) => console.log(e))
}

window.onload = function() {
    loadWheatleyCrab()
};