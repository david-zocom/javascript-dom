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
