// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
// var speakButton = document.querySelector('button');
var turkeyButton = document.querySelector('#turkey');
var momButton = document.querySelector('#mom');
var dadButton = document.querySelector('#dad');
var dogButton = document.querySelector('#dog');
var teacherButton = document.querySelector('#teacher');
var elephantButton = document.querySelector('#elephant');
var catButton = document.querySelector('#cat');

var satOnButton = document.querySelector('#satOn');
var ateButton = document.querySelector('#ate');
var dancedButton = document.querySelector('#danced');
var sawButton = document.querySelector('#saw');
var likeButton = document.querySelector('#like');
var kissedButton = document.querySelector('#kissed');

var funnyButton = document.querySelector('#funny');
var scaryButton = document.querySelector('#scary');
var goofyButton = document.querySelector('#goofy');
var slimyButton = document.querySelector('#slimy');
var barkingButton = document.querySelector('#barking');
var fatButton = document.querySelector('#fat');

var goatButton = document.querySelector('#goat');
var monkeyButton = document.querySelector('#monkey');
var fishButton = document.querySelector('#fish');
var cowButton = document.querySelector('#cow');
var frogButton = document.querySelector('#frog');
var bugButton = document.querySelector('#bug');
var wormButton = document.querySelector('#worm');

var moonButton = document.querySelector('#moon');
var chairButton = document.querySelector('#chair');
var spaghettiButton = document.querySelector('#spaghetti');
var soupButton = document.querySelector('#soup');
var grassButton = document.querySelector('#grass');
var shoesButton = document.querySelector('#shoes');

var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var button4 = document.querySelector('#button4');
var button5 = document.querySelector('#button5');

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
// speakButton.onclick = function() {
// 	speakNow(textToSpeak);
// }

turkeyButton.addEventListener('click', function() {    //Adding event handling to buttons to call the speakNow function
	var turkeyText = turkeyButton.innerText;           //Getting the button text to speak
	speakNow(turkeyText);
})

momButton.addEventListener('click', function() {
	var momText = momButton.innerText;
	speakNow(momText);
})

dadButton.addEventListener('click', function() {
	var dadText = dadButton.innerText;
	speakNow(dadText);
})

dogButton.addEventListener('click', function() {
	var dogText = dogButton.innerText;
	speakNow(dogText);
})

teacherButton.addEventListener('click', function() {
	var teacherText = teacherButton.innerText;
	speakNow(teacherText);
})

elephantButton.addEventListener('click', function() {
	var elephantText = elephantButton.innerText;
	speakNow(elephantText);
})

catButton.addEventListener('click', function() {
	var catText = catButton.innerText;
	speakNow(catText);
})

satOnButton.addEventListener('click', function() {
	var satOnText = satOnButton.innerText;
	speakNow(satOnText);
})

ateButton.addEventListener('click', function() {
	var ateText = ateButton.innerText;
	speakNow(ateText);
})

dancedButton.addEventListener('click', function() {
	var dancedText = dancedButton.innerText;
	speakNow(dancedText);
})

sawButton.addEventListener('click', function() {
	var sawText = sawButton.innerText;
	speakNow(sawText);
})

likeButton.addEventListener('click', function() {
	var likeText = likeButton.innerText;
	speakNow(likeText);
})

kissedButton.addEventListener('click', function() {
	var kissedText = kissedButton.innerText;
	speakNow(kissedText);
})

funnyButton.addEventListener('click', function() {
	var funnyText = funnyButton.innerText;
	speakNow(funnyText);
})

scaryButton.addEventListener('click', function() {
	var scaryText = scaryButton.innerText;
	speakNow(scaryText);
})

goofyButton.addEventListener('click', function() {
	var goofyText = goofyButton.innerText;
	speakNow(goofyText);
})

slimyButton.addEventListener('click', function() {
	var slimyText = slimyButton.innerText;
	speakNow(slimyText);
})

barkingButton.addEventListener('click', function() {
	var barkingText = barkingButton.innerText;
	speakNow(barkingText);
})

fatButton.addEventListener('click', function() {
	var fatText = fatButton.innerText;
	speakNow(fatText);
})

goatButton.addEventListener('click', function() {
	var goatText = goatButton.innerText;
	speakNow(goatText);
})

monkeyButton.addEventListener('click', function() {
	var monkeyText = monkeyButton.innerText;
	speakNow(monkeyText);
})

fishButton.addEventListener('click', function() {
	var fishText = fishButton.innerText;
	speakNow(fishText);
})

cowButton.addEventListener('click', function() {
	var cowText = cowButton.innerText;
	speakNow(cowText);
})

frogButton.addEventListener('click', function() {
	var frogText = frogButton.innerText;
	speakNow(frogText);
})

bugButton.addEventListener('click', function() {
	var bugText = bugButton.innerText;
	speakNow(bugText);
})

wormButton.addEventListener('click', function() {
	var wormText = wormButton.innerText;
	speakNow(wormText);
})

moonButton.addEventListener('click', function() {
	var moonText = moonButton.innerText;
	speakNow(moonText);
})

chairButton.addEventListener('click', function() {
	var chairText = chairButton.innerText;
	speakNow(chairText);
})

spaghettiButton.addEventListener('click', function() {
	var spaghettiText = spaghettiButton.innerText;
	speakNow(spaghettiText);
})

soupButton.addEventListener('click', function() {
	var soupText = soupButton.innerText;
	speakNow(soupText);
})

grassButton.addEventListener('click', function() {
	var grassText = grassButton.innerText;
	speakNow(grassText);
})

shoesButton.addEventListener('click', function() {
	var shoesText = shoesButton.innerText;
	speakNow(shoesText);
})

button1.addEventListener('click', function() {
	var turkeyText = turkeyButton.innerText;           
	speakNow(turkeyText);
	var momText = momButton.innerText;
	speakNow(momText);
	var dadText = dadButton.innerText;
	speakNow(dadText);
	var dogText = dogButton.innerText;
	speakNow(dogText);
	var teacherText = teacherButton.innerText;
	speakNow(teacherText);
	var elephantText = elephantButton.innerText;
	speakNow(elephantText);
	var catText = catButton.innerText;
	speakNow(catText);
})

button2.addEventListener('click', function() {
	var satOnText = satOnButton.innerText;
	speakNow(satOnText);
	var ateText = ateButton.innerText;
	speakNow(ateText);
	var dancedText = dancedButton.innerText;
	speakNow(dancedText);
	var sawText = sawButton.innerText;
	speakNow(sawText);
	var likeText = likeButton.innerText;
	speakNow(likeText);
	var kissedText = kissedButton.innerText;
	speakNow(kissedText);
})

button3.addEventListener('click', function(){
	var funnyText = funnyButton.innerText;
	speakNow(funnyText);
	var scaryText = scaryButton.innerText;
	speakNow(scaryText);
	var goofyText = goofyButton.innerText;
	speakNow(goofyText);
	var slimyText = slimyButton.innerText;
	speakNow(slimyText);
	var barkingText = barkingButton.innerText;
	speakNow(barkingText);
	var fatText = fatButton.innerText;
	speakNow(fatText);
})

button4.addEventListener('click', function() {
	var goatText = goatButton.innerText;
	speakNow(goatText);
	var monkeyText = monkeyButton.innerText;
	speakNow(monkeyText);
	var fishText = fishButton.innerText;
	speakNow(fishText);
	var cowText = cowButton.innerText;
	speakNow(cowText);
	var frogText = frogButton.innerText;
	speakNow(frogText);
	var bugText = bugButton.innerText;
	speakNow(bugText);
	var wormText = wormButton.innerText;
	speakNow(wormText);
})

button5.addEventListener('click', function() {
	var moonText = moonButton.innerText;
	speakNow(moonText);
	var chairText = chairButton.innerText;
	speakNow(chairText);
	var spaghettiText = spaghettiButton.innerText;
	speakNow(spaghettiText);
	var soupText = soupButton.innerText;
	speakNow(soupText);
	var grassText = grassButton.innerText;
	speakNow(grassText);
	var shoesText = shoesButton.innerText;
	speakNow(shoesText);
})
