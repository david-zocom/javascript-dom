window.addEventListener('load', whenLoaded);
// $ document ready
const baseUrl = 'http://mardby.se/AJK15G/lorem_text_random.php';

function whenLoaded(event) {
	console.log('Alla HTML-element har laddats in i DOM-trädet');

	ex1();
}  // whenLoaded


function ex1() {
	// baseUrl?numberOfWords=10
	// data: { numberOfWords: 10 }
	$('.requestButton').click(event => {
		let numWords = $('#numberOfWords').val();
		const settings = {
			method: 'GET',
			data: {
				numberOfWords: numWords
			}
		};
		$.ajax(baseUrl, settings).done(data => {
			// $('#requestDiv').text(data);
			$('#listOfRequests').append(`<li>${data}</li>`);
			console.log('AJAX done, data=', data);
		})
	})
}


//
