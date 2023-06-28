const prev = document.getElementById("prev"),
    playpause = document.getElementById("playpause"),
    next = document.getElementById("next"),
    audio = document.getElementById("audio"),
    progressBar = document.querySelector("#progress"),
    cTime = document.getElementById("cTime"),
    tTime = document.getElementById("tTime"),
    img = document.getElementById("img"),
    musicName = document.querySelector(".music-name"),
    artistNmae = document.querySelector(".artist-name")
let musicCount = 0;

window.addEventListener('load', () => {
    musicName.innerText = music[musicCount].songName;
    artistNmae.innerText = music[musicCount].artist;
    audio.src = music[musicCount].path;
})

audio.onloadedmetadata = function() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;
}

playpause.addEventListener('click', () => {
    if (playpause.classList.contains("fa-play")) {
        playpause.classList.replace("fa-play", "fa-pause")
        img.classList.add("anim")
        audio.play();
    } else {
        playpause.classList.replace("fa-pause", "fa-play")
        img.classList.remove("anim")
        audio.pause();
    }
})
if (audio.played) {
    setInterval(() => {
        progressBar.value = audio.currentTime;
    }, 500)
}

progressBar.addEventListener('change', () => {
    audio.play()
    playpause.classList.replace("fa-play", "fa-pause")
    img.classList.add("anim")
    audio.currentTime = progressBar.value;
})


next.addEventListener('click', () => {
    musicCount += 1
    playpause.classList.replace("fa-play", "fa-pause")
    img.classList.add("anim")
    musicName.innerText = music[musicCount].songName;
    artistNmae.innerText = music[musicCount].artist;
    audio.src = music[musicCount].path;
    audio.play();
})

prev.addEventListener('click', () => {
    musicCount -= 1
    playpause.classList.replace("fa-play", "fa-pause")
    img.classList.add("anim")
    musicName.innerText = music[musicCount].songName;
    artistNmae.innerText = music[musicCount].artist;
    audio.src = music[musicCount].path;
    audio.play();
})