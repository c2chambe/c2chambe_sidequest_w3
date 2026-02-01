//Ending 3/3: Friend of geese

//DO NOT ADD SETUP() or DRAW()
//setup() and draw live in main.js

function drawFriend() {
  background(255, 0, 0);
  //image(goose_1, width / 2 - 150, height / 2 - 100, 300, 200); //AI Assisted line

  textWrap(WORD);

  fill(0);
  textAlign(CENTER, CENTER);

  // Main success message
  textSize(40);
  text("Friend of Geese", width / 2, 300);

  // Explaination text
  textSize(20);
  text(
    "The goose went back to its flock and told them all about your kindess and generosity. From then on whenever you are on campus, the geese will not attack you",
    width / 2,
    360,
  );
  text("Ending 3/3", width / 2, 400);

  const restartBtn = {
    x: width / 2,
    y: 560,
    w: 220,
    h: 70,
    label: "START OVER",
  };

  drawFriendButton(restartBtn);

  cursor(isHover(restartBtn) ? HAND : ARROW); //AI assited line
}

function friendMousePressed() {
  const restartBtn = { x: width / 2, y: 560, w: 220, h: 70 };
  if (isHover(restartBtn)) {
    currentScreen = "start";
  }
}

// ------------------------------------------------------------
// Keyboard input for win screen
// ------------------------------------------------------------
//Restart function key press
function friendKeyPressed() {
  if (key === "r" || key === "R") {
    currentScreen = "start";
  }
}
