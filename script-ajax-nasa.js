const apiKey = '4M4odrw3hC0JDJ8D4EHOVe7JwZJpNGYqXHIGKbtd';

$(document).ready(function() {
	// när jag klickar på knappen ska vi skicka ett request till NASA
	// vi ska skriva ut det vi får tillbaka på konsolen
	$('#ajaxButton').click(event => {
		// console.log('Clicked ajax button');
		const url = 'https://api.nasa.gov/planetary/apod';
		const settings = {
			method: 'GET',
			data: {
				api_key: apiKey
			}
		}
		$.ajax(url, settings)
		.done(data => {
			// console.log('Done! API returned: ', data);
			// NASAs API returnerar JSON som jQuery automatiskt gör om till ett objekt åt oss. Andra APIn kanske bara returnerar en sträng..
			let html = `<h1>${data.title}</h1>`
				+ `<img src="${data.url}" alt="Space image" />`
				+ `<p>${data.explanation}</p>`;
			$('.ajaxResult').html(html);
		})
		.fail(error => {
			console.log('Fail! ', error);
		})
		.always(what => {
			// console.log('Always - oavsett om vårt request lyckats eller misslyckats. ', what);
		})
	})

	//ajaxResult
})  // jQuery document.ready



//
