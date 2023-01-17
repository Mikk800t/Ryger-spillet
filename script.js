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
  <script>
    var audio = new Audio("music.mp3");
    audio.loop = true;
    audio.play();
  </script>
</head>
<body>
  <!-- Your HTML content goes here -->
</body>
</html>
