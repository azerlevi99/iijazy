function toggleGuru() {
    const hiddenCards = document.querySelectorAll('.hidden-card');
    const btn = document.getElementById('btn-toggle');
    hiddenCards.forEach(card => {
        card.classList.toggle('show');
    });
    
    if (hiddenCards[0].classList.contains('show')) {
        btn.innerText = "Lihat Lebih Sedikit";
    } else {
        btn.innerText = "Lihat Selengkapnya";
    }
}

function toggleGuru() {
    const hiddenCards = document.querySelectorAll('.hidden-card');
    const btn = document.getElementById('btn-toggle-3');
    hiddenCards.forEach(card => {
        card.classList.toggle('show');
    });
    
    if (hiddenCards[0].classList.contains('show')) {
        btn.innerText = "Lihat Lebih Sedikit";
    } else {
        btn.innerText = "Lihat Selengkapnya";
    }
}

window.addEventListener('scroll', function() {
    const scrollUpBtn = document.querySelector('.scroll-up');
    if (scrollUpBtn) {
        if (window.scrollY > 300) {
            scrollUpBtn.classList.add('scroll-active');
        } else {
            scrollUpBtn.classList.remove('scroll-active');
        }
    }
});