// NOTE: Do NOT add setup() or draw() in this file
// setup() and draw() live in main.js
// This file only defines:
// 1) drawGame() → what the game screen looks like
// 2) input handlers → what happens when the player clicks or presses keys
// 3) helper functions specific to this screen

// ------------------------------
// Button data
// ------------------------------
// This object stores all the information needed to draw
// and interact with the button on the game screen.
// Keeping this in one object makes it easier to move,
// resize, or restyle the button later.
const gameBtn1 = {
  x: 200, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "OPTION 1", // text shown on the button
};

const gameBtn2 = {
  x: 600, // x position (centre of the button)
  y: 550, // y position (centre of the button)
  w: 260, // width
  h: 90, // height
  label: "OPTION 2", // text shown on the button
};

// ------------------------------
// Main draw function for this screen
// ------------------------------
// drawGame() is called from main.js *only*
// when currentScreen === "game"
function drawGame() {
  // Set background colour for the game screen
  background(240, 230, 140);

  // ---- Title and instructions text ----
  fill(0); // black text
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Screen", width / 2, 160);

  textSize(18);
  text(
    "Use your mouse to interact with buttons and to skip to next dialogue.",
    width / 2,
    210,
  );

  // ---- Draw the button ----
  // We pass the button object to a helper function
  drawGameButton(gameBtn1);
  drawGameButton(gameBtn2); //AI assisted line

  // ---- Cursor feedback ----
  // If the mouse is over a button, show a hand cursor
  // Otherwise, show the normal arrow cursor
  cursor(isHover(gameBtn1) || isHover(gameBtn2) ? HAND : ARROW);
}

// ------------------------------
// Button drawing helper
// ------------------------------
// This function is responsible *only* for drawing the button.
// It does NOT handle clicks or game logic.
function drawGameButton({ x, y, w, h, label }) {
  rectMode(CENTER);

  // Check if the mouse is hovering over the button
  // isHover() is defined in main.js so it can be shared
  const hover = isHover({ x, y, w, h });

  noStroke();

  // Change button colour when hovered
  // This gives visual feedback to the player
  fill(
    hover
      ? color(180, 220, 255, 220) // lighter blue on hover
      : color(200, 220, 255, 190), // normal state
  );

  // Draw the button rectangle
  rect(x, y, w, h, 14); // last value = rounded corners

  // Draw the button text
  fill(0);
  textSize(28);
  textAlign(CENTER, CENTER);
  text(label, x, y);
}

// ------------------------------
// Mouse input for this screen
// ------------------------------
// This function is called from main.js
// only when currentScreen === "game"
function gameMousePressed() {
  const gameBtn1 = {
    x: 200, // x position (centre of the button)
    y: 550, // y position (centre of the button)
    w: 260, // width
    h: 90, // height
    label: "OPTION 1", // text shown on the button
  };

  const gameBtn2 = {
    x: 600, // x position (centre of the button)
    y: 550, // y position (centre of the button)
    w: 260, // width
    h: 90, // height
    label: "OPTION 2", // text shown on the button
  };

  // Only trigger the outcome if the button is clicked
  if (isHover(gameBtn1)) {
    triggerRandomOutcome();
  } else if (isHover(gameBtn2)) {
    gooseFriend();
  }

  // ------------------------------
  // Keyboard input for this screen
  // ------------------------------
  // Allows keyboard-only interaction (accessibility + design)
  function gameKeyPressed() {
    // ENTER key triggers the same behaviour as clicking the button
    if (keyCode === ENTER) {
      triggerRandomOutcome();
    }
  }

  // ------------------------------
  // Game logic: win or lose
  // ------------------------------
  // This function decides what happens next in the game.
  // It does NOT draw anything.
  function triggerRandomOutcome() {
    // random() returns a value between 0 and 1
    // Here we use a 50/50 chance:
    // - less than 0.5 → win
    // - 0.5 or greater → lose
    //
    // You can bias this later, for example:
    // random() < 0.7 → 70% chance to win
    if (random() < 0.5) {
      currentScreen = "win";
    } else {
      currentScreen = "lose";
    }
  }

  function gooseFriend() {
    currentScreen = "friend";
  }
}
