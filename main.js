function toggleContent(element) {
    const nextP = element.nextElementSibling;
    const confirmHide = confirm("Apakah ingin menyembunyikan konten ini?");
    if (confirmHide) {
        nextP.style.display = "none";
    } else {
        nextP.style.display = "block";
    }
}

function setMode(mode) {
    if (mode === "rapi") {
        document.body.classList.remove("messy");
    } else if (mode === "berantakan") {
        document.body.classList.add("messy");
    }
}
