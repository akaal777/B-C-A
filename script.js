function redirectTo(url) {
    document.body.style.transition = 'opacity 0.5s ease-out';
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = url;
    }, 500);
}
