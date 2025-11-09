function toggleContent(element) {
    const answer = element.querySelector('.answer');
    const confirmHide = confirm('Apakah konten ingin disembunyikan?');
    if (confirmHide) {
        answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
    }
}

function setMode(mode) {
    if (mode === 'rapi') {
        document.body.classList.remove('berantakan');
    } else if (mode === 'berantakan') {
        document.body.classList.add('berantakan');
    }
}
