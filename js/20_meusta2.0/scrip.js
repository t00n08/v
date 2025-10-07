const likeButton = document.getElementById("like-button");
const likeCount = document.getElementById("contador");

likeButton.addEventListener("click", () => {
    let count = parseInt(likeCount.textContent);
    likeCount.textContent = count + 1;
});

const likeButtonDos = document.getElementById("like-button2");
const likeCountDos = document.getElementById("contador2");

likeButtonDos.addEventListener("click", () => {
    let count = parseInt(likeCountDos.textContent);
    likeCountDos.textContent = count + 1;
});

const likeButtonTres = document.getElementById("like-button3");
const likeCountTres = document.getElementById("contador3");

likeButtonTres.addEventListener("click", () => {
    let count = parseInt(likeCountTres.textContent);
    likeCountTres.textContent = count + 1;
});
