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

/*
3a Gör en sida med två knappar. På den ena ska det stå "+1" och på den andra "-1". Sidan ska också visa ett tal. När man klickar på +1 respektive -1 ska talet ändras. Talet ska finnas i en global variabel som heter counterState.
3b Gör en sida med två knappar. På den ena ska det stå "Start" och på den andra "Stopp". Stopp-knappen ska vara inaktiverad, använd element.disabled=true
När man klickar på Start ska start-knappen inaktiveras och stopp-knappen aktiveras. När man klickar på Stopp ska det bli tvärtom
*/
