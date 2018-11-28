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

	inputEvents.addEventListener('focus', printEventInfo);
	inputEvents.addEventListener('blur', printEventInfo);

	document.querySelector('select').addEventListener('change', printEventInfo);


	let inputEmail = document.querySelector('#inputEmail');
	inputEmail.addEventListener('change', validateEmail);


	document.querySelector('#oldschool').addEventListener('click', function(event) {
		console.log('Oh no - stop the link!');
		event.preventDefault();
	})
}  // whenLoaded

function printEventInfo(event) {
	console.log('Event type: ', event.type, event.key, event.target.value);
}
function validateEmail(event) {
	// kontrollera att det användaren skrivit in i input-fältet är en giltig e-postadress
	let input = document.querySelector('#inputEmail');
	let incomingValue = input.value;
	console.log(`Input value is: ${incomingValue} `);
	// Giltig e-post måste innehålla ett @ och inte vara tom
	let hasAt = incomingValue.includes('@');
	let isEmpty = incomingValue == '';
	let validationDiv = document.querySelector('#validation');
	let saveButton = document.querySelector('#saveButton');

	saveButton.disabled = true;
	if( isEmpty ) {
		validationDiv.innerHTML = 'Du måste skriva en e-postadress!';
	} else if( !hasAt ) {
		validationDiv.innerHTML = 'Ogiltig e-postadress - du saknar "@"!';
	} else {
		validationDiv.innerHTML = '';
		saveButton.disabled = false;
	}
}




// window.addEventListener('mousemove', ()=> {body=document.querySelector('body'),body.style.opacity='0',body.style.transition='opacity 25s ease 2s'});
