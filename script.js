let play = document.getElementById("play");
let progressBar = document.getElementById("progressBar");
let audio = new Audio("audio/1.weba");

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");
  } else {
    audio.pause();
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
  }
});

audio.addEventListener("timeupdate", () => {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
  progressBar.style.background = `linear-gradient(to right, #177200ff ${progress}%, #333 ${progress}%)`;
});

progressBar.addEventListener("input", function () {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #177200ff ${value}%, #333 ${value}%)`;
  audio.currentTime = (progressBar.value * audio.duration) / 100;
});

songs = [
  {
    songName: "Song1",
    songDes: "This is description for song1",
    songImage: "image/1.jpg",
  },
];

let playMusic = Array.from(document.getElementsByClassName("playMusic"));

const makeAllPlay = () => {
  playMusic.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

playMusic.forEach((element) => {
  element.addEventListener("click", (e) => {
    makeAllPlay();
    e.target.classList.toggle("fa-circle-play");
    e.target.classList.toggle("fa-circle-pause");

    index = parseInt(e.target.id);
    audio.src = `audio/${index}.weba`;
    audio.currentTime = 0;
  });
});
