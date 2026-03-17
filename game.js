

/*******************************************************/

// GLOBAL 
function lavaDeath() {
	player.remove();
	wallGroup.remove();
	text("YOU DIED", 250, 350);
}
// a bunch of global variables are set here
let score = 0;
let wallGroupVelocity = 1;
let inMenu = 1;
let screen = 1;
let lavaUpAndDown = 1;
let coinRandomX = 1;
let backgroundLavaUpAndDown = 1;
let coinSideToSide = 1;
let backgroundState = 1;
//SETUP
function setup() {
	console.log("setup: ");
	cnv = new Canvas(500, 750);
	wallGroup = new Group();
	coinGroup = new Group();

	// Starts the game
	startGame();
}

// game begin
function startGame() {
	// if you are on the menu screen spawn the menu sprites
	if (screen == 1) {
		startButton = new Sprite(250, 500, 250, 50);
		startButton.color = 'rgb(131, 79, 255)'

		// once you have started the game (line 246) change the screen and start the game
	} else if (screen == 2) {
		console.log("game started fully ");
		// remove the sprites from the menu
		startButton.remove();

		// spawn in the lava in the background
		backgroundLava = new Sprite(250, 725, 500, 100, 'n');
		backgroundLava.color = 'rgb(158, 53, 5)'
		backgroundLava.stroke = 'rgb(175, 0, 0)';
		backgroundLava.opacity = 50;

		//spawn the player
		player = new Sprite(250, 375, 25);
		player.color = 'rgb(255, 79, 79)';
		player.stroke = 'rgb(133, 28, 42)';
		player.vel.x = 0;
		player.vel.y = 0;

		//spawn the lava in the middleground
		lava = new Sprite(250, 725, 500, 100, 'n');
		lava.color = 'rgb(255, 135, 79)'
		lava.stroke = 'rgb(255, 0, 0)';
	}


}


function leftBlockage() {
	if (screen == 2) {
		console.log("leftBlockage");
		wall = new Sprite(125, 0, 250, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.2

	}

}

function rightBlockage() {
	if (screen == 2) {
		console.log("rightBlockage");
		wall = new Sprite(375, 0, 250, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.2
	}
}

function rightChunk() {
	if (screen == 2) {
		console.log("rightChunk");
		wall = new Sprite(375, 0, 150, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(300, 25, 20, 200, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(76, -75, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
	}
}

async function waveLarge() {
	if (screen == 2) {
		console.log("waveLarge");
		leftSideWave();
		await sleep(6000);
		rightSideWave();
		await sleep(6000);
		leftSideWave();
		await sleep(5500);
		rightSideWave();
		await sleep(5500);
		leftSideWave();
		await sleep(5300);
		rightSideWave();
		await sleep(5000);
		wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.5
	}
}
async function waveLargeFast() {
	if (screen == 2) {
		console.log("waveLarge");
		leftSideWave();
		await sleep(3000);
		rightSideWave();
		await sleep(3000);
		leftSideWave();
		await sleep(2900);
		rightSideWave();
		await sleep(2900);
		leftSideWave();
		await sleep(2600);
		rightSideWave();
		await sleep(2600);
		wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.5
	}
}

function rightSideWave() {
	if (screen == 2) {
		wall = new Sprite(200, -75, 20, 200, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(424, -175, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(424, 25, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
	}
}

function leftSideWave() {
	if (screen == 2) {
		wall = new Sprite(300, -75, 20, 200, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(76, -175, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(76, 25, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
	}
}

function largeSector1() {
	if (screen == 2) {
		wall = new Sprite(300, -25, 20, 100, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(400, -175, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(76, 25, 468, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(21, -270, 300, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(350, -500, 100, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(400, -600, 200, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(210, -330, 170, 20, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(100, -453, 250, 114, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(400, -410, 20, 200, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(300, -410, 20, 200, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
		wall = new Sprite(490, -398, 20, 427, 'k');
		wall.color = 'rgb(116, 100, 86)';
		wall.vel.y = wallGroupVelocity;
		wallGroup.add(wall);
	}
}
// the function to spawn a coin
function spawnCoin() {
	coin = new Sprite(coinRandomX, 0, 15, 'n');
	coin.color = 'rgb(255, 189, 91)';
	coin.stroke = 'rgb(255, 151, 14)';
	coin.vel.y = 1.75;
	coinGroup.add(coin);
	coin.overlaps(player, deleteCoin);
}

// function to delete the coin
function deleteCoin(_ssss, _player) {
	console.log('get coin');
	_ssss.remove();
	score = score + 1;
}

// the for statement and function that spawns the coins
async function coinSpawning() {
	console.log('spawning coins');
	for (let i = 0; i < 50; i++) {
		spawnCoin();
		await sleep(2000); // Wait for 2 seconds before the next coin
	}
}

/*******************************************************/
function draw() {
	//console.log("draw:");
	//console.log(frameCount);
	if (backgroundState == 1) {
		background('rgb(153, 0, 0)');
	} else if (backgroundState == 2) {
		background('rgb(158, 40, 60)');
	} else if (backgroundState == 3) {
		background('rgb(158, 40, 113)');
	} else if (backgroundState == 4) {
		background('rgb(158, 40, 133)');
	} else if (backgroundState == 5) {
		background('rgb(121, 40, 158)');
	} else if (backgroundState == 6) {
		background('rgb(95, 40, 158)');
	} else if (backgroundState == 7) {
		background('rgb(48, 40, 158)');
	} else if (backgroundState == 8) {
		background('rgb(40, 68, 158)');
	}

	// starting on the menu 
	if (kb.pressing('space') && inMenu == 1) {
		// will change the screen going off the menu into the main game
		inMenu = 0;
		screen = 2;
		console.log('game started');
		console.log(inMenu);
		startGame();

	}

	if (frameCount == 50) {
		coinSpawning();
	}
	// text (debug stuff)
	text("Mouse X = " + round(mouse.x), 5, 15);
	text("Mouse Y = " + round(mouse.y), 5, 35);
	text("WallVelocity = " + (wallGroupVelocity), 5, 55);
	text("Score = " + (score), 5, 75);
	text("Frame = " + (frameCount), 5, 95);

	// the variable to randomize the coins positions when spawning
	coinRandomX = Math.random() * (490 - 10) + 10;


	if (screen == 2) {

		//spawning the gameplay using frame counting
		if (frameCount == 100) {
			backgroundState = 1
			leftBlockage();
		} else if (frameCount == 300) {
			rightBlockage();
		} else if (frameCount == 500) {
			leftBlockage();
		} else if (frameCount == 750) {
			rightChunk();
		} else if (frameCount == 1000) {
			rightBlockage();
		} else if (frameCount == 1250) {
			leftSideWave();
		} else if (frameCount == 1500) {
			rightSideWave();
		} else if (frameCount == 1750) {
			leftBlockage();
		} else if (frameCount == 1755) {
			rightBlockage();
		} else if (frameCount == 1850) {
			wallGroupVelocity = 1
			largeSector1();
		} else if (frameCount == 2850) {
			wallGroupVelocity = 3
			leftBlockage();
		} else if (frameCount == 2870) {
			wallGroupVelocity = 5
			rightBlockage();
		} else if (frameCount == 3000) {
			backgroundState = 2
		} else if (frameCount == 3010) {
			backgroundState = 3
		} else if (frameCount == 3020) {
			backgroundState = 4
		} else if (frameCount == 3030) {
			backgroundState = 5
		} else if (frameCount == 3040) {
			backgroundState = 6
		} else if (frameCount == 3050) {
			backgroundState = 7
		} else if (frameCount == 3060) {
			backgroundState = 8
		}
	}
	//frameCount = 0;
	//	wallGroupVelocity = wallGroupVelocity / 2;
	// next line does nothing but sets up for like 242F
	if (screen == 1) {

		text("Don't Burn", 200, 250);
		text('Controls: Left/Right Arrow Keys', 200, 350);
		frameCount = 0

		// once screen has changed to the gameplay screen start doing the gameplay stuff
	} else if (screen == 2) {

		// smooth velocity stuff
		if (backgroundState == 1) {
		player.vel.x = player.vel.x / 1.05;
		player.vel.y = player.vel.y / 1.05;
		} else if (backgroundState == 8) {
		player.vel.x = player.vel.x / 1.01;
		player.vel.y = player.vel.y / 1.01;
		}
		player.rotationSpeed = player.rotationSpeed / 1.05;

		// player movement
		if (backgroundState == 1 || backgroundState == 2 || backgroundState == 3 || backgroundState == 4 || backgroundState == 5 || backgroundState == 6 || backgroundState == 7) {
		if (kb.pressing('left')) {
			player.vel.x = -3;
			player.rotationSpeed = -5;
		}
		if (kb.pressing('right')) {
			player.vel.x = 3;
			player.rotationSpeed = 5;
		}
	} else if (backgroundState == 8) {
		if (kb.pressing('left')) {
			player.vel.x = player.vel.x + -0.05;
			player.rotationSpeed = -5;
		}
		if (kb.pressing('right')) {
			player.vel.x = player.vel.x + 0.05;
			player.rotationSpeed = 5;
		}
	}
		if (player.y >= 678) {
			lavaDeath();
			screen = 3
		}

		// a bunch of variables for visual movement
		lavaUpAndDown = lavaUpAndDown + 0.02
		coinSideToSide = coinSideToSide + 0.02
		backgroundLavaUpAndDown = backgroundLavaUpAndDown + 0.05
		lava.y = 720 + 50 * Math.cos(lavaUpAndDown) * 0.3
		backgroundLava.y = 650 + 50 * Math.cos(backgroundLavaUpAndDown) * 0.2


		// despawn coins
		if (frameCount > 75) {
			if (coin.pos.y >= 400) {
				coin.remove()
			}
		}
		// you screen will turn to screen 3 if you die and this will happen
	} else if (screen == 3) {
		console.log("dead");
		textSize(50);
		text("YOU DIED", 50, 350);
	}

	// give me money
	if (screen == 2 && player.collided(coinGroup)) {
		score = score + 1
	}
}

/*******************************************************/

