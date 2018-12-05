// "state" är appens tillstånd, värdet på alla variabler
// vi samlar globala variabler i ett objekt
const state = {
	counterState: 10
};

window.addEventListener('load', whenLoaded);
window.addEventListener('load', printEventInfo);


function whenLoaded(event) {
	console.log('Alla HTML-element har laddats in i DOM-trädet');

	ex1();
	ex2();
	ex3();
	ex5();
}  // whenLoaded


function ex1() {
	let elementToChangeContent = document.querySelectorAll('.exercise1');
	elementToChangeContent[0].innerHTML = 'Övning 1 löst!';
}
function ex2() {
	let button = document.querySelector('.exercise2 > button');
	button.addEventListener('click', printEventInfo);
}
function printEventInfo(event) {
	let output = document.querySelector('#output');
	output.innerHTML = `Event-objektet har type=${event.type} och target=${event.target}. `;
}

function ex3() {
	let span = document.querySelector('.exercise3 > span');
	let addButton = document.querySelector('#addButton');
	let subtractButton = document.querySelector('#subtractButton');

	addButton.addEventListener('click', function(event) {
		state.counterState++;
		span.innerHTML = state.counterState;
		// console.log(`Klickade +1, counterState=${state.counterState}`);
	});
	subtractButton.addEventListener('click', function(event) {
		state.counterState--;
		span.innerHTML = state.counterState;
		// console.log(`Klickade -1, counterState=${state.counterState}`);
	});

	let startButton = document.querySelector('#startButton');
	let stopButton = document.querySelector('#stopButton');
	startButton.addEventListener('click', toggleButtons);
	stopButton.addEventListener('click', toggleButtons);
	/*startButton.addEventListener('click', function(event) {
		startButton.disabled = true;
		stopButton.disabled = false;
	});
	stopButton.addEventListener('click', function(event) {
		stopButton.disabled = true;
		startButton.disabled = false;
	});*/
	function toggleButtons() {
		const startButtonEnabled = !startButton.disabled;
		startButton.disabled = startButtonEnabled;
		stopButton.disabled = !startButtonEnabled;
	}
}

function ex5() {
	$('.tab-header > *').click(event => $('.tab-content > *').hide());
	$('.tab-header > :first-child').click(event => {
		$('.tab-content > :nth-child(1)').show();
	});
	$('.tab-header > :nth-child(2)').click(event => {
		$('.tab-content > :nth-child(2)').show();
	});
	$('.tab-header > :nth-child(3)').click(event => {
		$('.tab-content > :nth-child(3)').show();
	});
	// Vi kan förenkla ytterligare med hjälp av data-attribut
	// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
}
/*
5 Gör en sida med "flikar". Ett system med flikar är när man har två eller flera element (använd div) som finns på samma plats på sidan, men bara ett är synligt åt gången. Det ska finnas knappar eller andra element (minst ett per div) som man klickar på för att göra motsvarande element synligt.



*/
