$(document).ready(function() {

	$('#clickButton').on('click', event => {
		let lista = $('<ol class="till-pepparkakor"> <li>ädelost</li> <li>glögg</li> <li>smör</li> <li>Julmust""</li> </ol>');
		$('.pepparkaksdiv').append( lista );
	});


	$('#toggle').click(event => $('#effects').toggle());
	$('#fadeToggle').click(event => $('#effects').fadeToggle(1000));
	$('#slideToggle').click(event => $('#effects').slideToggle(1000, () => console.log('Animeringen är klar') ));

})  // jQuery document.ready
