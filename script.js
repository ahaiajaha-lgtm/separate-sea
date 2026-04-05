let day = 1;

const text = document.getElementById("text");
const roomImage = document.getElementById("roomImage");
const sleepBtn = document.getElementById("sleepBtn");
document.getElementById("chair").onclick = () => {
  text.innerText = "It's slightly warm.";
};


function updateRoom() {
  text.innerText = "Day " + day;

  // Change visuals based on day
  if (day === 1) {
    roomImage.src = "room_day1.png";
  }

  if (day === 2) {
    roomImage.src = "room_day2.png";
  }

  if (day === 3) {
    roomImage.style.filter = "hue-rotate(90deg)";
    text.innerText = "Was it always this color?";
  }

  if (day === 4) {
    text.innerText = "You feel like something moved.";
  }

  if (day === 5) {
    text.innerText = "You don't remember buying that.";
  }
}

if (day === 6) {
  text.innerText = "You already slept.";
}

if (day === 7) {
  text.innerText = "The chair was always facing you.";
}

function playCreepSound() {
  const audio = new Audio("whisper.mp3");
  audio.volume = 0.2;
  audio.play();
}

if (day >= 3 && Math.random() < 0.3) {
  setTimeout(playCreepSound, 2000);
}

if (day === 4) {
  setInterval(() => {
    roomImage.style.opacity = 
      roomImage.style.opacity == 1 ? 0.95 : 1;
  }, 300);
}

sleepBtn.onclick = () => {
  day++;
  updateRoom();
};

updateRoom();
