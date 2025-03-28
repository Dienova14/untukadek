document.addEventListener('DOMContentLoaded', () => {
    const thrButton = document.getElementById('thrButton');
    
    // Ganti URL ini dengan link THR Anda
    const thrLink = "https://your-thr-link-here.com";
    
    thrButton.addEventListener('click', () => {
        window.location.href = thrLink;
    });

    // Animasi bintang-bintang dan hati
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        document.querySelector('.stars').appendChild(star);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = '100%';
        heart.style.fontSize = (Math.random() * 10 + 10) + 'px';
        heart.style.animation = `hearts ${Math.random() * 2 + 2}s linear infinite`;
        document.querySelector('.hearts').appendChild(heart);

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Membuat bintang-bintang
    for (let i = 0; i < 50; i++) {
        createStar();
    }

    // Membuat hati bergerak secara periodik
    setInterval(createHeart, 1000);

    // Efek hover pada tombol
    thrButton.addEventListener('mouseover', () => {
        thrButton.style.transform = 'scale(1.1)';
    });

    thrButton.addEventListener('mouseout', () => {
        thrButton.style.transform = 'scale(1)';
    });
});