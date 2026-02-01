//Decision 2 Option 1: Honk Back at the Goose

function drawHonk() {
  background(255, 204, 0);
  tint(255, 255);
  image(bg_bridge, 0, 0, width, height);
  // filter(NORMAL);
  filter(THRESHOLD, 0.19);
  tint(255, 255);

  image(goose_1, width / 2 - 150, height / 2 - 30, 600, 500); //AI Assisted line
  //filter(NORMAL);

  fill(255);
  textAlign(CENTER, CENTER);

  // Main success messages
  textSize(40);
  text("You honk back?", width / 2, 60);
  textWrap(WORD);
  // Explaination text
  textSize(18);
  text(
    "Against your better judgement, and fighting your inistincts to run away, you cautiously approach the black form in front of you. As you get closer you are able to make out what you're looking it - a Canadian Goose. THe goose stares at you with emotionless black eyes. It spreads its wings and lets out a menacing HONK that echoes across campus. It won't let you pass that easily.",
    width / 2,
    170,
    width - 80,
  );
  fill(255, 0, 0);
  textSize(24);
  text("What do you do?", width / 2, 480);

  const honkBtn1 = {
    x: width / 3,
    y: 560,
    w: 220,
    h: 70,
    label: "Honk Back.",
  };

  const honkBtn2 = {
    x: (width / 3) * 2,
    y: 560,
    w: 220,
    h: 70,
    label: "Attempt to scare it.",
  };

  drawHonkButton(honkBtn1);
  drawHonkButton(honkBtn2);

  cursor(isHover(honkBtn1) || isHover(honkBtn2) ? HAND : ARROW); //AI assisted line
}

function honkMousePressed() {
  const honkBtn1 = {
    x: width / 3,
    y: 560,
    w: 220,
    h: 70,
    label: "Honk Back.",
  };

  const honkBtn2 = {
    x: (width / 3) * 2,
    y: 560,
    w: 220,
    h: 70,
    label: "Attempt to scare it.",
  };

  if (isHover(honkBtn1)) {
    currentScreen = "friend"; //run
  } else if (isHover(honkBtn2)) {
    currentScreen = "lose"; //honk
  }
}

function drawHonkButton({ x, y, w, h, label }) {
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

function honkKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
