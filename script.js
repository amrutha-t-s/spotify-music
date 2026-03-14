let play = document.getElementById("play");
let progressBar = document.getElementById("progressBar");
let audio = new Audio("audio/1.mp3");

let currentSong = 1;
// Shuffle & Repeat variables
let isShuffle = false;
let repeatMode = 0; // 0:off, 1:all, 2:single
let shuffledQueue = [];

play.addEventListener("click", () => {
  if (audio.paused || audio.currentTime == 0) {
    audio.play();
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");

    // Update song info display
    document.getElementById("nowPlayingImg").src = `image/${currentSong}.jpg`;
    document.getElementById("nowPlayingTitle").textContent =
      `Song ${currentSong}`;
    document.getElementById("nowPlayingDesc").textContent = "Artist - Album";
  } else {
    audio.pause();
    play.classList.remove("fa-circle-pause");
    play.classList.add("fa-circle-play");
  }
});

audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #177200ff ${progress}%, #333 ${progress}%)`;
  }
});

progressBar.addEventListener("input", function () {
  let value = this.value;
  this.style.background = `linear-gradient(to right, #177200ff ${value}%, #333 ${value}%)`;
  if (!isNaN(audio.duration)) {
    audio.currentTime = (progressBar.value * audio.duration) / 100;
  }
});

const songs = [
  {
    id: 1,
    songName: "Song1",
    songDes: "Artist - Album",
    songImage: "image/1.jpg",
    songPath: "audio/1.mp3",
  },
  {
    id: 2,
    songName: "Song2",
    songDes: "Artist - Album",
    songImage: "image/2.jpg",
    songPath: "audio/2.mp3",
  },
  {
    id: 3,
    songName: "Song3",
    songDes: "Artist - Album",
    songImage: "image/3.jpg",
    songPath: "audio/3.mp3",
  },
  {
    id: 4,
    songName: "Song4",
    songDes: "Artist - Album",
    songImage: "image/4.jpg",
    songPath: "audio/4.mp3",
  },
  {
    id: 5,
    songName: "Song5",
    songDes: "Artist - Album",
    songImage: "image/5.jpg",
    songPath: "audio/5.mp3",
  },
  {
    id: 6,
    songName: "Song6",
    songDes: "Artist - Album",
    songImage: "image/6.jpg",
    songPath: "audio/6.mp3",
  },
  {
    id: 7,
    songName: "Song7",
    songDes: "Artist - Album",
    songImage: "image/7.jpg",
    songPath: "audio/7.mp3",
  },
  {
    id: 8,
    songName: "Song8",
    songDes: "Artist - Album",
    songImage: "image/8.jpg",
    songPath: "audio/8.mp3",
  },
  {
    id: 9,
    songName: "Song9",
    songDes: "Artist - Album",
    songImage: "image/9.jpg",
    songPath: "audio/9.mp3",
  },
  {
    id: 10,
    songName: "Song10",
    songDes: "Artist - Album",
    songImage: "image/10.jpg",
    songPath: "audio/10.mp3",
  },
  {
    id: 11,
    songName: "Song11",
    songDes: "Artist - Album",
    songImage: "image/11.jpg",
    songPath: "audio/11.mp3",
  },
  {
    id: 12,
    songName: "Song12",
    songDes: "Artist - Album",
    songImage: "image/1.jpg",
    songPath: "audio/12.mp3",
  },
  {
    id: 13,
    songName: "Song13",
    songDes: "Artist - Album",
    songImage: "image/2.jpg",
    songPath: "audio/13.mp3",
  },
  {
    id: 14,
    songName: "Song14",
    songDes: "Artist - Album",
    songImage: "image/3.jpg",
    songPath: "audio/14.mp3",
  },
  {
    id: 15,
    songName: "Song15",
    songDes: "Artist - Album",
    songImage: "image/4.jpg",
    songPath: "audio/15.mp3",
  },
  {
    id: 16,
    songName: "Song16",
    songDes: "Artist - Album",
    songImage: "image/5.jpg",
    songPath: "audio/16.mp3",
  },
  {
    id: 17,
    songName: "Song17",
    songDes: "Artist - Album",
    songImage: "image/6.jpg",
    songPath: "audio/17.mp3",
  },
  {
    id: 18,
    songName: "Song18",
    songDes: "Artist - Album",
    songImage: "image/7.jpg",
    songPath: "audio/18.mp3",
  },
  {
    id: 19,
    songName: "Song19",
    songDes: "Artist - Album",
    songImage: "image/8.jpg",
    songPath: "audio/19.mp3",
  },
  {
    id: 20,
    songName: "Song20",
    songDes: "Artist - Album",
    songImage: "image/9.jpg",
    songPath: "audio/20.mp3",
  },
  {
    id: 21,
    songName: "Song21",
    songDes: "Artist - Album",
    songImage: "image/10.jpg",
    songPath: "audio/21.mp3",
  },
  {
    id: 22,
    songName: "Song22",
    songDes: "Artist - Album",
    songImage: "image/11.jpg",
    songPath: "audio/22.mp3",
  },
  {
    id: 23,
    songName: "Song23",
    songDes: "Artist - Album",
    songImage: "image/1.jpg",
    songPath: "audio/23.mp3",
  },
  {
    id: 24,
    songName: "Song24",
    songDes: "Artist - Album",
    songImage: "image/2.jpg",
    songPath: "audio/24.mp3",
  },
  {
    id: 25,
    songName: "Song25",
    songDes: "Artist - Album",
    songImage: "image/3.jpg",
    songPath: "audio/25.mp3",
  },
  {
    id: 26,
    songName: "Song26",
    songDes: "Artist - Album",
    songImage: "image/4.jpg",
    songPath: "audio/26.mp3",
  },
  {
    id: 27,
    songName: "Song27",
    songDes: "Artist - Album",
    songImage: "image/5.jpg",
    songPath: "audio/27.mp3",
  },
];

let playMusic = Array.from(document.getElementsByClassName("playMusic"));

const makeAllPlay = () => {
  playMusic.forEach((element) => {
    element.classList.remove("fa-circle-pause");
    element.classList.add("fa-circle-play");
  });
};

playMusic.forEach((element, i) => {
  element.id = i;
  element.addEventListener("click", (e) => {
    makeAllPlay();
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");
    play.classList.remove("fa-circle-play");
    play.classList.add("fa-circle-pause");

    let index = parseInt(e.target.id);
    currentSong = index + 1; // Fix: index starts at 0, songs at 1

    // Update song info display
    document.getElementById("nowPlayingImg").src = songs[index].songImage;
    document.getElementById("nowPlayingTitle").textContent =
      songs[index].songName;
    document.getElementById("nowPlayingDesc").textContent =
      songs[index].songDes;

    audio.src = songs[index].songPath;
    audio.currentTime = 0;
    audio.play();
  });
});

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

playNextSong = () => {
  if (isShuffle && shuffledQueue.length > 0) {
    currentSong = shuffledQueue.shift();
    if (shuffledQueue.length === 0)
      shuffledQueue = shuffleArray([...Array(27).keys()].map((i) => i + 1));
  } else {
    let nextSong = (currentSong % 27) + 1;
    currentSong = nextSong;
  }

  // Update song info display
  let songIndex = currentSong - 1;
  document.getElementById("nowPlayingImg").src = songs[songIndex].songImage;
  document.getElementById("nowPlayingTitle").textContent =
    songs[songIndex].songName;
  document.getElementById("nowPlayingDesc").textContent =
    songs[songIndex].songDes;

  audio.src = songs[songIndex].songPath;
  audio.currentTime = 0;
  audio.play();
};

playPrevSong = () => {
  currentSong = currentSong === 1 ? 27 : currentSong - 1;

  // Update song info display
  let songIndex = currentSong - 1;
  document.getElementById("nowPlayingImg").src = songs[songIndex].songImage;
  document.getElementById("nowPlayingTitle").textContent =
    songs[songIndex].songName;
  document.getElementById("nowPlayingDesc").textContent =
    songs[songIndex].songDes;

  audio.src = songs[songIndex].songPath;
  audio.currentTime = 0;
  audio.play();
};

forward = document.getElementById("forward");
backward = document.getElementById("backward");

forward.addEventListener("click", () => {
  playNextSong();
});

audio.addEventListener("ended", () => {
  if (repeatMode === 2) return; // Single repeat
  playNextSong();
});

backward.addEventListener("click", () => {
  playPrevSong();
});

// Shuffle functionality
document.getElementById("shuffle").addEventListener("click", () => {
  isShuffle = !isShuffle;
  document.getElementById("shuffle").classList.toggle("active");
  if (isShuffle) {
    shuffledQueue = shuffleArray([...Array(27).keys()].map((i) => i + 1));
  } else {
    shuffledQueue = [];
  }
});

// Repeat functionality
document.getElementById("repeat").addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  let repeatBtn = document.getElementById("repeat");
  repeatBtn.classList.toggle("active", repeatMode !== 0);
  repeatBtn.classList.toggle("repeat-one", repeatMode === 2);
  audio.loop = repeatMode === 2;
});
