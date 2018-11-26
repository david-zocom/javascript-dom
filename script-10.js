console.log('Lägg din JavaScript i HEAD');
window.addEventListener('load', whenLoaded);

function whenLoaded() {
	// Demo: lägga till ett element inuti ett annat
	let el1 = document.getElementById('nisse');  // hitta rätt element
	let el2 = document.createElement('span');
	el2.innerHTML = '- HACKED';
	el2.style.fontWeight = 'bold'; // CSS font-weight → .fontWeight
	el1.appendChild(el2);

	// 10.1
	// Leta upp elementet i DOM
	let div = document.getElementById('changeMe');
	// Skriv ut värdet på variabeln, för att se så den inte är NULL
	console.log('Div har värdet: ' + div);
	// Ändra innehållet i elementet
	div.innerHTML = 'Jag är ändrad!';

	// 10.2
	// Leta upp <button> och <ol> i DOM och spara dem i variabler
	let addLiButton = document.querySelector('#addLiButton');
	let olList = document.querySelector('#olList');
	// Prenumerera på klickhändelser på knappen
	addLiButton.addEventListener('click', event => {
		// Skapa ett <li> element och ge det rätt textinnehåll
		let newLi = document.createElement('li');
		newLi.innerText = 'Fäsk!';
		// Lägg till <li> elementet sist i <ol> listan
		olList.appendChild(newLi);
		// Demonstrera CSS-stilar med listan. Observera att background-color byter namn till backgroundColor!
		olList.style.color = 'tomato';
		olList.style.backgroundColor = 'black';
	})
}
