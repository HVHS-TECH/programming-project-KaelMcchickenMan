
/*******************************************************/

// GLOBAL 




//SETUP
function setup() {
	console.log("setup: ");
cnv = new Canvas(500, 750);



startButton = new Sprite (250, 500, 250, 50);
startButton.color = 'rgb(131, 79, 255)'
startGame();
function startGame() {

startButton.remove();
player = new Sprite(250, 375, 25);
player.color = 'rgb(131, 79, 255)';
player.stroke = 'rgb(39, 10, 58)';

player.vel.x = 0;
player.vel.y = 0;

}
}
	
/*******************************************************/

function draw() {

console.log("draw:");
	 background('rgb(104, 63, 151)');
startGame();


    function startGame() {
    player.vel.x = player.vel.x / 1.05;
player.vel.y = player.vel.y / 1.05;
player.rotationSpeed = player.rotationSpeed / 1.05;
	if (kb.pressing ('left')) {

		player.vel.x = -3;
		player.rotationSpeed = -5;

	} 
	if (kb.pressing ('right')) {

	player.vel.x = 3;
	player.rotationSpeed = 5;
	} 
    	if (kb.pressing ('down')) {

		player.vel.y = 3;

	} 
	if (kb.pressing ('up')) {
	player.vel.y = -3;

	} 
    }
 



}
/*******************************************************/
