//Ending 1/3: Escaped the Goose

//DO NOT ADD SETUP() or DRAW()
//setup() and draw live in main.js

function drawRun() {
  background(255, 204, 0);
  image(bg_DC, 0, 0, width, height);
  filter(THRESHOLD, 0.6);
  fill(60, 255, 150); //FIND A BETTER COLOUR
  textAlign(CENTER, CENTER);

  // Main success message
  textStyle(BOLD);
  textSize(40);
  text("You run away...", width / 2, 150);
  textWrap(WORD);
  // Explaination text
  textSize(20);
  text(
    " You turn around and run as fast as you can towards the bus stop. Behind you you hear a cacophony of angry honks and duriously flapping wings as the goose tries to catch up to you. You see your bus arriving at the terminal and sprint towards the opening doors. You leap onto the bus and the doors close with the goose right behind them. You breathe a deep sigh, and take one last look at the goose who is glaring at you on the other side of the glass. You're safe...for now. ",
    width / 2,
    310,
    width - 80,
  );
  text("Ending 1/3", width / 2, 450);

  const restartBtn = {
    x: width / 2,
    y: 560,
    w: 220,
    h: 70,
    label: "START OVER",
  };

  drawRunButton(restartBtn);

  cursor(isHover(restartBtn) ? HAND : ARROW); //AI assited line
}

function runMousePressed() {
  const restartBtn = { x: width / 2, y: 560, w: 220, h: 70 };
  if (isHover(restartBtn)) {
    currentScreen = "start";
  }
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
//Restart function key press
function runKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}

function drawRunButton({ x, y, w, h, label }) {
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
