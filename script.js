const secho_texts = [
    "<u>secho</u> comme même...",
    "<u>secho</u> put1...",
    "<u>secho</u> sa mere...",
    "<u>secho</u> vraiment...",
    "olala <u>secho</u>...",
    "<u>secho</u> de ouf...",
    "<u>secho</u>...",
    "tavu comme <u>secho</u>?",
    "cé bon mais <u>secho</u>...",
    "ah ouais, <u>secho</u>...",
    "<u>secho</u>ooooo..."
];

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

body = document.querySelector("body");
secho = document.querySelector(".dynamic");


secho.innerHTML = secho_texts[getRandomInt(10)];
body.style.backgroundColor = getRandomColor()
