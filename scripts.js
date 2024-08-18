window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) { // 50px kaydırma sonrası renk değişimi
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};


document.addEventListener('DOMContentLoaded', function() {
    // Hedef tarih: 27 Kasım 2024
    var targetDate = new Date("Nov 27, 2024 00:00:00").getTime();

    // Geri sayım fonksiyonu
    var countdownInterval = setInterval(function() {

        // Şu anki zamanı al
        var now = new Date().getTime();

        // Hedef tarihe kalan süreyi hesapla
        var timeRemaining = targetDate - now;

        // Zamanı gün, saat, dakika ve saniyeye çevir
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Geri sayım metnini güncelle
        document.getElementById("countdown").textContent = days + "g " + hours + "s " + minutes + "d " + seconds + "s ";

        // Geri sayım bittiğinde
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").textContent = "The sale has started!";
        }
    }, 1000);
});