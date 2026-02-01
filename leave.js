//Decision 1 Option 1: Walk away from the Goose

function drawLeave() {
  background(255, 204, 0);
  tint(255, 225);
  image(wat_SNOW, 0, 0, width, height);

  image(goose_1, width / 2 + 100, height / 2 + 150, 75, 50);
  tint(255, 255);
  filter(GRAY);
  fill(255);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("You Walked Away...", width / 2, 100);
  textWrap(WORD);
  // Explaination text
  textSize(20);
  text(
    "You turn around and strat heading the opposite direction. You've seen far too many horror movies to willingly investigate a dark figure alone, in the middle of the night. You keep walking down the street, trying to shake the feeling that something is watching you. You glace behind you, and to your relief, you see nothing. You breathe a deep sign of relief. \n \n When you turn back in the direction you were headed, the figure is back. Your heart skips a beat.",
    width / 2,
    300,
    width - 80,
  );

  textSize(24);
  text("What do you do?", width / 2, 460);

  const gameBtn1 = {
    x: width / 3,
    y: 560,
    w: 220,
    h: 70,
    label: "Run.",
  };

  const gameBtn2 = {
    x: (width / 3) * 2,
    y: 560,
    w: 220,
    h: 70,
    label: "Take a closer look.",
  };

  drawLeaveButton(gameBtn1);
  drawLeaveButton(gameBtn2);

  cursor(isHover(gameBtn1) || isHover(gameBtn2) ? HAND : ARROW);
}

function leaveMousePressed() {
  const gameBtn1 = {
    x: width / 3,
    y: 560,
    w: 220,
    h: 70,
    label: "Run.",
  };

  const gameBtn2 = {
    x: (width / 3) * 2,
    y: 560,
    w: 220,
    h: 70,
    label: "Take a closer look.",
  };
  if (isHover(gameBtn1)) {
    currentScreen = "run"; //run
  } else if (isHover(gameBtn2)) {
    currentScreen = "approach";
  }
}

function drawLeaveButton({ x, y, w, h, label }) {
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

function leaveKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
