const randomButton = document.getElementById("random-button");
const result = document.getElementById("result");

const items = ["Gnist", "3x2 10", "Kongesug", "Håndbong", "5x15", "3x12", "4x12", "1 Sug", "2 Sug", "3 Sug", "4 Sug", "5 Sug", "6 Sug", "Bob Marley (Den Normale)", "Lyskryds", "Tænkeboks", "3x10", "Ninja", "Bob Marley (Den lange)"];

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


<!DOCTYPE html>
<html>
<head>
  <title>Background Music</title>
</head>
<body>
  <button id="button2" onclick="showPlayer()">Show Music Control</button>
  <div id="audio-player" style="display: none;">
    <audio controls id="audio">
        <source src="song1.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
  </div>
  
  <script>
    var songs = ["song1.mp3", "song2.mp3", "song3.mp3", "song4.mp3"];
    var currentSong = 0;
    var audio = document.getElementById("audio");

    function showPlayer() {
        document.getElementById("audio-player").style.display = "block";
        audio.src = songs[currentSong];
        audio.play();
    }

    audio.addEventListener("ended", function(){
        currentSong = (currentSong + 1) % songs.length;
        audio.src = songs[currentSong];
        audio.play();
    });
  </script>
</body>
</html>

