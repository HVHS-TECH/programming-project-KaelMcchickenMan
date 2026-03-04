
/*******************************************************/

// GLOBAL 
function lavaDeath() {
	player.remove();
	wallGroup.remove();
	text("YOU DIED", 250, 350);
}
let wallGroupVelocity = 1;
let inMenu = 1;
let screen = 1;
speedingUpWalls();

//SETUP
function setup() {
	console.log("setup: ");
	cnv = new Canvas(500, 750);
	wallGroup = new Group();



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

		player = new Sprite(250, 375, 25);
		player.color = 'rgb(255, 79, 79)';
		player.stroke = 'rgb(133, 28, 42)';

		player.vel.x = 0;
		player.vel.y = 0;

		lava = new Sprite(250, 725, 500, 100, 'n');
		lava.color = 'rgb(255, 135, 79)'
		lava.stroke = 'rgb(255, 0, 0)';
		//for (let i = 0; i < 15; i++) {

		//wall = new Sprite(250, 0, 100, 20, 'k');
		//wall.color = 'rgb(116, 100, 86)';
		//wall.vel.y = 1;
		//wallGroup.add(wall);
		//}

		function leftBlockage() {
			console.log("leftBlockage");
			wall = new Sprite(125, 0, 250, 20, 'k');
			wall.color = 'rgb(116, 100, 86)';
			wall.vel.y = wallGroupVelocity;
			wallGroup.add(wall);
			wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.2
		}

		function rightBlockage() {
			console.log("rightBlockage");
			wall = new Sprite(375, 0, 250, 20, 'k');
			wall.color = 'rgb(116, 100, 86)';
			wall.vel.y = wallGroupVelocity;
			wallGroup.add(wall);
			wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.2
		}

		function rightChunk() {
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

		async function waveLarge() {
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
		async function waveLargeFast() {
			console.log("waveLarge");
			leftSideWave();
			await sleep(2000);
			rightSideWave();
			await sleep(2000);
			leftSideWave();
			await sleep(1900);
			rightSideWave();
			await sleep(1900);
			leftSideWave();
			await sleep(1600);
			rightSideWave();
			await sleep(1600);
			wallGroupVelocity = wallGroupVelocity + wallGroupVelocity * 0.5
		}


		function rightSideWave() {
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

		function leftSideWave() {
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

		wallSpawning();
		//gameplay spawning
		async function wallSpawning() {
			leftBlockage();
			await sleep(5000);
			rightBlockage();
			await sleep(4000);
			leftBlockage();
			await sleep(3000);
			rightBlockage();
			await sleep(4000);
			leftBlockage();
			await sleep(1);
			rightBlockage();
			await sleep(500);
			wallGroupVelocity = 1
			waveLarge();
			await sleep(37000);
			leftBlockage();
			await sleep(1);
			rightBlockage();
			await sleep(4000);
			leftBlockage();
			await sleep(1);
			rightBlockage();
			await sleep(5000);
			wallGroupVelocity = 2
			rightChunk();
			await sleep(7000);
			wallGroupVelocity = 4
			waveLargeFast();
			await sleep(15000);
			wallGroupVelocity = 5.5
			waveLargeFast();
			await sleep(10000);
			// leftBlockage();
			// await sleep(2000);
			// rightChunk();
			// await sleep(7000);
			//rightBlockage();
			// await sleep(2000);
			//leftBlockage();

		}


	}

}




/*******************************************************/

function draw() {

	console.log("draw:");
	background('rgb(153, 0, 0)');



	if (kb.pressing('space') && inMenu == 1) {
		inMenu = 0;
		screen = 2;
		console.log('game started');
		console.log(inMenu);
		startGame();

	}


	text("Mouse X = " + round(mouse.x), 350, 350);
	text("Mouse Y = " + round(mouse.y), 350, 375);




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
		}
	}
}







/*******************************************************/
