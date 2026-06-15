// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".loader").style.opacity = "0";

        setTimeout(() => {
            document.querySelector(".loader").style.display = "none";
        }, 800);

    }, 1800);

});


// Pages

const pages = document.querySelectorAll(".page");

function nextPage(current){

    const currentPage =
    document.getElementById(`page${current}`) ||
    document.querySelector(".hero");

    const next =
    document.getElementById(`page${current + 1}`);

    if(next){

        currentPage.classList.add("hidden");

        setTimeout(() => {

            next.classList.remove("hidden");

        }, 400);

    }

}


// Floating Hearts

const heartsContainer =
document.getElementById("hearts");

function createHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "💖",
        "💕",
        "💗",
        "💞",
        "🌸",
        "✨"
    ];

    heart.innerHTML =
    hearts[Math.floor(Math.random()*hearts.length)];

    heart.style.left =
    Math.random()*100 + "%";

    heart.style.fontSize =
    (15 + Math.random()*20) + "px";

    heart.style.animationDuration =
    (5 + Math.random()*6) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 500);


// Smooth Reveal Animation

const cards =
document.querySelectorAll(".glass");

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

});

setTimeout(() => {

    cards.forEach(card => {

        card.style.transition =
        "1.2s ease";

        card.style.opacity = "1";
        card.style.transform =
        "translateY(0)";

    });

}, 1200);


// Extra Sparkles

function createSparkle(){

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";
    sparkle.style.left =
    Math.random()*100 + "%";

    sparkle.style.top =
    Math.random()*100 + "%";

    sparkle.style.pointerEvents = "none";

    sparkle.style.opacity = "0.8";

    sparkle.style.fontSize =
    (10 + Math.random()*15) + "px";

    sparkle.style.animation =
    "sparkle 3s linear forwards";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 3000);

}

setInterval(createSparkle, 1500);


// Add sparkle animation dynamically

const style =
document.createElement("style");

style.innerHTML = `

@keyframes sparkle{

0%{
opacity:0;
transform:scale(.5);
}

20%{
opacity:1;
}

100%{
opacity:0;
transform:translateY(-50px)
scale(1.4);
}

}

`;

document.head.appendChild(style);
