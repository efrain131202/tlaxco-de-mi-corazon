const menuButton = document.getElementById('menuButton');
    const pdfViewer = document.getElementById('pdfViewer');
    const closePdfButton = document.getElementById('closePdfButton');

    menuButton.addEventListener('click', () => {
        pdfViewer.style.display = 'block';
    });

    closePdfButton.addEventListener('click', () => {
        pdfViewer.style.display = 'none';
    });