// typing effect (for message page)
// show name everywhere
window.onload = function () {
    let name = getName();

    let welcome = document.getElementById("welcomeText");
    if (welcome) {
        welcome.innerHTML = "Hey " + name + " 💕";
    }

   let i = 0;

function typeMessage(text, elementId) {
    let el = document.getElementById(elementId);
    if (!el) return;

    el.innerHTML = "";

    function type() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    i = 0;
    type();
}

window.onload = function () {
    let name = getName();

    typeMessage("Hey " + name + " 💖", "welcomeText");
    typeMessage("I have something special for you " + name + " 💌", "typing");
};

    let proposal = document.getElementById("proposalText");
    if (proposal) {
        proposal.innerHTML = name + ", will you be my Best Friend forever? 🥺💖";
    }
};
function saveMemory() {
    let memory = document.getElementById("memory").value;

    localStorage.setItem("memory", memory);

    alert("Memory saved 💖");
}

document.body.addEventListener("click", function () {
    let music = document.getElementById("bg-music");
    if (music) {
        music.play();
        music.volume = 0.3;
    }
}, { once: true });

let isPlaying = false;

function toggleMusic() {
    let music = document.getElementById("bg-music");

    if (!isPlaying) {
        music.play();
        isPlaying = true;
    } else {
        music.pause();
        isPlaying = false;
    }
}
