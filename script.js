function zoomImage(src) {
    const overlay = document.getElementById('zoomOverlay');
    const zoomImg = document.getElementById('zoomImage');
    zoomImg.src = src;
    overlay.classList.add('active');
}

function closeZoom() {
    const overlay = document.getElementById('zoomOverlay');
    overlay.classList.remove('active');
}
