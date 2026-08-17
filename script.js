/* =====================================================
   ELEMENT
===================================================== */

const openingScreen =
    document.getElementById("openingScreen");

const mainContent =
    document.getElementById("mainContent");

const bgMusic =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

const heartsContainer =
    document.getElementById("hearts-container");

const sparklesContainer =
    document.getElementById("sparkles-container");

const letterModal =
    document.getElementById("letterModal");


/* =====================================================
   START WEBSITE
===================================================== */

function startExperience() {

    /*
        Sembunyikan opening
    */

    openingScreen.style.display = "none";


    /*
        Tampilkan website
    */

    mainContent.style.display = "block";


    /*
        Scroll ke atas
    */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    /*
        Coba menjalankan musik
    */

    bgMusic
        .play()
        .then(() => {

            musicButton.innerHTML = "🎵";

            musicButton.classList.add(
                "playing"
            );

        })
        .catch(() => {

            musicButton.innerHTML = "🔇";

        });


    /*
        Mulai animasi
    */

    startHeartAnimation();

    startSparkleAnimation();


    /*
        Mulai reveal section
    */

    startScrollReveal();

}


/* =====================================================
   MUSIC
===================================================== */

function toggleMusic() {

    if (bgMusic.paused) {

        bgMusic
            .play()
            .then(() => {

                musicButton.innerHTML = "🎵";

                musicButton.classList.add(
                    "playing"
                );

            })
            .catch(() => {

                alert(
                    "Tekan tombol musik sekali lagi."
                );

            });

    }

    else {

        bgMusic.pause();

        musicButton.innerHTML = "🔇";

        musicButton.classList.remove(
            "playing"
        );

    }

}


/* =====================================================
   FLOATING HEART
===================================================== */

const heartList = [

    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💞",
    "💘",
    "💝",
    "♡",
    "♥"

];


function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    heart.innerHTML =
        heartList[
            Math.floor(
                Math.random() *
                heartList.length
            )
        ];


    /*
        Posisi horizontal random
    */

    heart.style.left =
        Math.random() * 100 + "vw";


    /*
        Ukuran random
    */

    heart.style.fontSize =
        (
            Math.random() * 18 +
            10
        ) + "px";


    /*
        Kecepatan random
    */

    const duration =
        Math.random() * 5 + 5;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(
        heart
    );


    /*
        Hapus setelah animasi selesai
    */

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);

}


/* =====================================================
   START HEART
===================================================== */

function startHeartAnimation() {


    /*
        Buat hati awal
    */

    for (
        let i = 0;
        i < 20;
        i++
    ) {

        setTimeout(() => {

            createHeart();

        }, i * 150);

    }


    /*
        Buat hati terus menerus
    */

    setInterval(() => {

        createHeart();

    }, 600);

}


/* =====================================================
   SPARKLE
===================================================== */

function createSparkle() {

    const sparkle =
        document.createElement("div");


    sparkle.className =
        "floating-sparkle";


    sparkle.innerHTML =
        Math.random() > .5
            ? "✦"
            : "✧";


    sparkle.style.left =
        Math.random() * 100 + "vw";


    sparkle.style.fontSize =
        (
            Math.random() * 8 +
            8
        ) + "px";


    const duration =
        Math.random() * 5 + 5;


    sparkle.style.animationDuration =
        duration + "s";


    sparklesContainer.appendChild(
        sparkle
    );


    setTimeout(() => {

        sparkle.remove();

    }, duration * 1000);

}


/* =====================================================
   START SPARKLE
===================================================== */

function startSparkleAnimation() {

    for (
        let i = 0;
        i < 10;
        i++
    ) {

        setTimeout(() => {

            createSparkle();

        }, i * 250);

    }


    setInterval(() => {

        createSparkle();

    }, 1000);

}


/* =====================================================
   LETTER
===================================================== */

function openLetter() {

    letterModal.style.display =
        "flex";


    document.body.style.overflow =
        "hidden";

}


function closeLetter() {

    letterModal.style.display =
        "none";


    document.body.style.overflow =
        "auto";

}


/* =====================================================
   CLICK OUTSIDE LETTER
===================================================== */

letterModal.addEventListener(
    "click",
    function(event) {

        if (
            event.target ===
            letterModal
        ) {

            closeLetter();

        }

    }
);


/* =====================================================
   ESC
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeLetter();

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

function startScrollReveal() {

    const sections =
        document.querySelectorAll(
            ".story-section"
        );


    const observer =
        new IntersectionObserver(

            function(entries) {

                entries.forEach(
                    function(entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";


                            entry.target.style.transform =
                                "translateY(0)";

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    sections.forEach(
        function(section) {

            section.style.opacity =
                "0";


            section.style.transform =
                "translateY(30px)";


            section.style.transition =
                "opacity .8s ease, transform .8s ease";


            observer.observe(
                section
            );

        }
    );

}


/* =====================================================
   PREVENT IMAGE DRAG
===================================================== */

document
    .querySelectorAll("img")
    .forEach(
        function(img) {

            img.addEventListener(
                "dragstart",
                function(event) {

                    event.preventDefault();

                }
            );

        }
    );