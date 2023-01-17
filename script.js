const randomButton = document.getElementById("random-button");
const result = document.getElementById("result");

const items = ["Gnist", "3x2 10", "Kongesug", "Håndbong", "5x15", "3x12", "4x12", "1 Sug", "2 Sug", "3 Sug", "4 Sug", "5 Sug", "6 Sug", "Bob Marley (Den Normale)", "Lyskryds", "Tænkeboks", "3x10", "Ninja", "Bob Marley (Den lange)"];

// Add a new button for the playlist
const playlistButton = document.getElementById("playlist-button");
const playlist = document.getElementById("playlist");
const audio = document.getElementById("audio");
const nextButton = document.getElementById("next-button");

let currentSong = 0;
let songs = ["music4.mp3", "music2.mp3", "music3.mp3"];

audio.src = songs[currentSong];

// Add event listeners for the new elements
playlistButton.addEventListener("click", function() {
  playlist.style.display = "block";
});

playlist.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    audio.src = e.target.id + ".mp3";
    audio.play();
  }
});

nextButton.addEventListener("click", function() {
  currentSong = (currentSong + 1) % songs.length;
  audio.src = songs[currentSong];
  audio.play();
});

randomButton.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * items.length);
  result.textContent = items[randomIndex];
});

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const textBox = document.getElementById("text-box");

button1.addEventListener("click", function() {
  textBox.style.display = "block";
});
button2.addEventListener("click", function() {
  textBox.style.display = "block";
});

textBox.addEventListener("click", function() {
  textBox.style.display = "none";
});
