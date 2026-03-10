
/*******************************************************/

// GLOBAL 
function lavaDeath() {
	player.remove();
	wallGroup.remove();
	text("YOU DIED", 250, 350);
}
let score = 0;
let wallGroupVelocity = 1;
let inMenu = 1;
let screen = 1;
let lavaUpAndDown = 1;
let coinRandomX = 1;
let backgroundLavaUpAndDown = 1;
let coinSideToSide = 1;
speedingUpWalls();

//SETUP
function setup() {
	console.log("setup: ");
	cnv = new Canvas(500, 750);
	wallGroup = new Group();
	coinGroup = new Group();



	// Starts the game by checking the game
	startGame();
}




function startGame() {
	
	if (screen == 1) {
		startButton = new Sprite(250, 500, 250, 50);
		startButton.color = 'rgb(131, 79, 255)'

	} else if (screen == 2) {

		console.log("game started fully ");
		startButton.remove();

		backgroundLava = new Sprite(250, 725, 500, 100, 'n');
		backgroundLava.color = 'rgb(158, 53, 5)'
		backgroundLava.stroke = 'rgb(175, 0, 0)';



		player = new Sprite(250, 375, 25);
		player.color = 'rgb(255, 79, 79)';
		player.stroke = 'rgb(133, 28, 42)';

		player.vel.x = 0;
		player.vel.y = 0;

		lava = new Sprite(250, 725, 500, 100, 'n');
		lava.color = 'rgb(255, 135, 79)'
		lava.stroke = 'rgb(255, 0, 0)';






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


	wallSpawning();



	//gameplay spawning
	async function wallSpawning() {
		console.log('spawning gameplay');
		leftBlockage();
		
		rightChunk();
		
		rightBlockage();
	}
}



function spawnCoin() {
	coin = new Sprite(coinRandomX, 0, 15, 'n');
	coin.color = 'rgb(255, 189, 91)';
	coin.stroke = 'rgb(255, 151, 14)';
	coin.vel.y = 1.75;
	coinGroup.add(coin);
	coin.overlaps(player, func2Call);
}

function func2Call(_ssss, _player) {
	console.log('get coin');
	_ssss.remove();
	score = score + 1;
}




async function coinSpawning() {
	console.log('spawning coins');
	for (let i = 0; i < 50; i++) {
		spawnCoin();
		await sleep(2000); // Wait for 1 second before the next iteration
	}
}

/*******************************************************/

function draw() {

	console.log("draw:");
	//console.log(frameCount);
	background('rgb(153, 0, 0)');



	if (kb.pressing('space') && inMenu == 1) {
		inMenu = 0;
		screen = 2;

		console.log('game started');
		console.log(inMenu);
		startGame();
		coinSpawning();
	}


	text("Mouse X = " + round(mouse.x), 5, 15);
	text("Mouse Y = " + round(mouse.y), 5, 35);
	text("WallVelocity = " + (wallGroupVelocity), 5, 55);
	text("Score = " + (score), 5, 75);

	coinRandomX = Math.random() * (490 - 10) + 10;



	if (screen == 1) {


	} else if (screen == 2) {
		player.vel.x = player.vel.x / 1.05;
		player.vel.y = player.vel.y / 1.05;
		player.rotationSpeed = player.rotationSpeed / 1.05;
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

		lavaUpAndDown = lavaUpAndDown + 0.02
		coinSideToSide = coinSideToSide + 0.02
		backgroundLavaUpAndDown = backgroundLavaUpAndDown + 0.05
		lava.y = 720 + 50 * Math.cos(lavaUpAndDown) * 0.3
		backgroundLava.y = 650 + 50 * Math.cos(backgroundLavaUpAndDown) * 0.2
		coin.x = coin.x + 0 * Math.cos(coinSideToSide) * 0.2
		if (coin.pos.y >= 600) {
			coin.remove()
		}

	} else if (screen == 3) {
		console.log("dead");
		textSize(50);
		text("YOU DIED", 50, 350);
	}

	if (screen == 2 && player.collided(coinGroup)) {
		score = score + 1
	}



}







/*******************************************************/
