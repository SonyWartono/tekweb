// Fungsi untuk menampilkan konten yang sesuai
function showContent(contentId) {
    const contentElements = document.querySelectorAll('.content');
    contentElements.forEach(content => {
        if (content.getAttribute('id') === contentId + 'Content') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
}