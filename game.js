

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
async function wallSpawning() {
	if (frameCount == 100) {
		console.log('spawning leftBlockage');
		leftBlockage();
	} else if (frameCount == 300) {
		console.log('spawning rightBlockage');
		rightBlockage();
	} else if (frameCount == 600) {
		rightChunk();

	//spawning the gameplay


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
	background('rgb(153, 0, 0)');
	wallSpawning();
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
		}
	}

	// next line does nothing but sets up for like 242F
	if (screen == 1) {

		text("Don't Burn", 200, 250);
		text('Controls: Left/Right Arrow Keys', 200, 350);
		frameCount = 0

		// once screen has changed to the gameplay screen start doing the gameplay stuff
	} else if (screen == 2) {

		// smooth velocity stuff
		player.vel.x = player.vel.x / 1.05;
		player.vel.y = player.vel.y / 1.05;
		player.rotationSpeed = player.rotationSpeed / 1.05;

		// player movement
		if (kb.pressing('left')) {
			player.vel.x = -3;
			player.rotationSpeed = -5;
		}
		if (kb.pressing('right')) {
			player.vel.x = 3;
			player.rotationSpeed = 5;
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

