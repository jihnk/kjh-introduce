const intro = document.querySelector(".movingText");
let introText = intro.innerText;
const ADDED_TEXT = "Hello, I'm jihyun!";
let i = 0;

function typing(){
    if (i < ADDED_TEXT.length) {
    let txt = ADDED_TEXT[i];
    intro.innerHTML += txt;
    i++;
    }
}
setInterval(typing,100);
