function redirectTo(url) {
    window.location.href = url;
}

document.getElementById('Grammer_Topics_Online').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1aycy4BfQ8cncQ7raCAWhpsj0RRb-m_kX/view', '_blank');
});

document.getElementById('Grammer_Topics_Offline').addEventListener('click', function() {
    window.open('grammar.pdf', '_blank'); // Replace with the actual link
});

document.getElementById('Unseen_Pasage_Online').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1aIKY-Au6RWvUGNvPSM4kwtMvs6s7saCa/view', '_blank');
});

document.getElementById('Unseen_Pasage_Offline').addEventListener('click', function() {
    window.open('unseen-passage.pdf', '_blank'); // Replace with the actual link
});

document.getElementById('Grammer_Book_Online').addEventListener('click', function() {
    window.open('https://drive.google.com/file/d/1DuMwtT6QPKAdiE0XFO8uFz_ArA5mSRGq/view', '_blank');
});

document.getElementById('Grammer_Book_Offline').addEventListener('click', function() {
    window.open('Englishgrammer.pdf', '_blank'); // Replace with the actual link
});
