const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

function moveButton() {
  // Switch to fixed positioning on the first move so it can go anywhere on screen
  noBtn.style.position = "fixed";

  // Calculate max X and Y coordinates so the button stays inside the screen
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  // Generate random coordinates
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply the new position
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Trigger movement on desktop hover and mobile tap
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// Optional: Action when clicking Yes
yesBtn.addEventListener("click", () => {
  alert("Yay! 🎉");
});
