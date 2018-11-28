window.addEventListener('load', whenLoaded);

function whenLoaded() {
	let element = document.querySelector('#myButton');

	let anon = function(event) {
		console.log('Anonym funktion anropad');
	}
	function named(event) {
		console.log('Namngiven funktion anropad');
	}

	console.log('element: ', element);

	element.addEventListener('click', anon);
	element.addEventListener('click', named);
	element.addEventListener('click', function(event) {
		console.log('Anonym funktion på samma rad');
	})

	let eventsDiv = document.querySelector('#mouseEvents');
	eventsDiv.addEventListener('click', printEventInfo);
	eventsDiv.addEventListener('mouseenter', printEventInfo);
	eventsDiv.addEventListener('mouseleave', printEventInfo);
	eventsDiv.addEventListener('mousemove', printEventInfo);

	let inputEvents = document.querySelector('#keyEvents');
	inputEvents.addEventListener('keydown', printEventInfo);
	inputEvents.addEventListener('keyup', printEventInfo);
	inputEvents.addEventListener('keypress', printEventInfo);
}  // whenLoaded

function printEventInfo(event) {
	console.log('Event type: ', event.type, event.key, event.target.value);
}





//
