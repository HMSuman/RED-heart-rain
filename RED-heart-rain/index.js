function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDirection = Math.random() * 2 + 3 + "5";
    heart.innerText = "I ❤️ EDITA";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 300);