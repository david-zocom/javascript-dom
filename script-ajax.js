$(document).ready(function() {

	$('#ajaxButton').on('click', event => {
		const url = 'https://forverkliga.se/JavaScript/api/simple.php';
		const settings = {
			method: 'GET',
			data: {
				key: 'value'
			},
		}
		$.ajax(url, settings)
		.done(whenAjaxDone)
		.fail(onError)
		.always(onComplete);
	})

	// leta upp knappen ur DOM
	// lägg till en klickhändelse:
	// - skapa AJAX GET request, med rätt querystring/url och settings
	// skapa funktion för att hantera svaret från servern:
	// - gör om strängen till ett JS objekt
	// - visa information från objektet på webbsidan
	$('#swButton').on('click', event => {
		const url = 'https://swapi.co/api/people';
		const settings = {
			method: 'GET'
			// data: - det här API:et använder inte querystring
		}
		let person = $('#swPerson').val();
		let finalUrl = url + '/' + person;
		console.log('Engaging warp speed! url=' + finalUrl);
		$.ajax(finalUrl, settings)
		.done(data => {
			// data är redan ett objekt, vi behöver inte använda JSON.parse
			console.log('parsed data: ', data);
			$('.swResult').html(`This is ${data.name} from ${data.homeworld}.`);
			// Förbättringspotential: homeworld är en API-länk. Vi kan hämta information om planeten med ett till AJAX GET request...
		})
	})

})  // jQuery document.ready

function whenAjaxDone(data) {
	console.log('Data = ' + data);
	let object = JSON.parse(data);
	console.log(object);
	$('.ajaxResult').html(`Servern svarade: ${object.message} <br>Klockan är: ${object.time}.`);
}
function onError(x) {
	console.log('Fail: x=', x);
}
function onComplete(x) {
	console.log('Complete: x=', x);
}





//
