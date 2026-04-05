let day = 1;

const text = document.getElementById("text");
const roomImage = document.getElementById("roomImage");
const sleepBtn = document.getElementById("sleepBtn");

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

sleepBtn.onclick = () => {
  day++;
  updateRoom();
};

updateRoom();
