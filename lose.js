// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawLose() → what the lose screen looks like
// 2) input handlers → how the player returns to the start screen

// ------------------------------
// Main draw function for lose screen
// ------------------------------
// drawLose() is called from main.js
// only when currentScreen === "lose"
function drawLose() {
  background(255, 210, 210);
  image(bg_DC, 0, 0, width, height);
  filter(THRESHOLD, 0.7);

  fill(255, 0, 0);
  textAlign(CENTER, CENTER);

  // Main message
  textSize(40);
  text("You try to scare the goose...", width / 2, 100);

  // Instruction text
  textSize(20);
  textStyle(BOLD);
  text(
    "You quickly realize that the goose is much less afraid of you than you are of it. It charges at you, flapping wildly and producing thunderous honks. Just before it hits you, you jolt awake. You've fallen asleep on your textbook. You check the time and realize that the Library closed 10 minutes ago. Quickly gathering your books, you rush out of the building, and breathe in the cold, winter air. \n \n You can't help but feel like you're being watched. ",
    width / 2,
    280,
    width - 80,
  );

  text(
    "Press R or press the button to return to the Main menu",
    width / 2,
    500,
  );
}

// ------------------------------
// Mouse input for lose screen
// ------------------------------
// Any mouse click returns the player to the start screen
// (no buttons needed for this simple end state)
function loseMousePressed() {
  currentScreen = "start";
}

// ------------------------------
// Keyboard input for lose screen
// ------------------------------
// R is commonly used for “restart” in games
function loseKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}

const restartBtn = {
  x: width / 2,
  y: 560,
  w: 220,
  h: 70,
  label: "START OVER",
};

drawLoseButton(restartBtn);

cursor(isHover(restartBtn) ? HAND : ARROW); //AI assited line

function drawLoseButton() {
  (x, y, w, h, label);
}
{
  const restartBtn = { x: width / 2, y: 560, w: 220, h: 70 };
  rectMode(CENTER);

  // Check whether the mouse is hovering over the button
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Subtle colour change on hover for visual feedback
  fill(hover ? color(200, 200, 255, 200) : color(220, 220, 255, 170));

  // Draw the button shape
  rect(x, y, w, h, 12);

  // Draw the button text
  fill(0);
  textSize(26);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}
{
}
