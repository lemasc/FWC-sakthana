const balloon = document.getElementById("balloon");
let currentSize = 200;
let colorIndex = 0;
const colors = ["red", "green", "blue"];
const maxSize = 420;
const minSize = 200;

function changeColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];
}

// Function to grow the balloon
function growBalloon() {
  if (currentSize >= maxSize) {
    // reset
    currentSize = minSize;
  } else {
    currentSize += 10;
  }
  balloon.style.width = currentSize + "px";
  balloon.style.height = currentSize + "px";
  changeColor();
}

// Function to shrink the balloon when mouse leaves
function shrinkBalloon() {
  if (minSize > currentSize) {
    currentSize = minSize;
  }
  if (currentSize > minSize) {
    currentSize -= 5;
  }
  balloon.style.width = currentSize + "px";
  balloon.style.height = currentSize + "px";
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  balloon.style.backgroundColor = colors[colorIndex];
}

balloon.addEventListener("click", growBalloon);
balloon.addEventListener("mouseleave", shrinkBalloon);
