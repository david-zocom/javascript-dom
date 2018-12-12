$(document).ready(() => {
	$('#ajaxButton').click(event => {
		const url = 'https://forverkliga.se/JavaScript/api/unreliable.php';
		const settings = {
			method: 'GET',
			data: {  // ?mode=live
				mode: 'live'
			},
			jsonp: 'callback'
		};
		$('#ajaxButton').prop('disabled', true);
		$('#ajaxResult').html('Skickar request till servern... <br>');
		sendRequest();
		function whenDone(data) {
			console.log('Servern skickade ett svar: ', typeof data, data);
			$('#ajaxResult').html($('#ajaxResult').html() + 'Servern skickade ett svar: <br>');
		}
		function whenFail(error, numberOfTries) {
			console.log('Error: ', error.responseText, error.statusText);
			// försök igen upp till 5 gånger
			sendRequest(numberOfTries - 1);
		}
		function sendRequest(numberOfTries = 5) {
			if( numberOfTries < 1 )
				return;
			$.ajax(url, settings)
			.done(whenDone)
			.fail(error => whenFail(error, numberOfTries))
			.always(() => {
				$('#ajaxButton').prop('disabled', false);
			})
		} // sendRequest
	})
})  // jQuery document.ready


//
