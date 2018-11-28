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
	console.log('10.1: Div har värdet: ' + div);
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


	// 10.3
	let icecreamButton = document.getElementById('changeIcecreamButton');
	icecreamButton.addEventListener('click', icecreamWhenClick);
}  // whenLoaded


let icecreamState = false;
function icecreamWhenClick(event) {
	// Leta upp div-element med en viss klass
	let divs = document.getElementsByClassName('icecream');
	divs = [...divs];  // gör om till vanlig lista, som kan forEach
	console.log('10.3: Icecream divs: ' + divs);
	divs.forEach(d => {
		const alternativeFlavor = 'tomato';
		if (icecreamState) {
			d.innerHTML = 'pistage';
		} else {
			d.innerHTML = alternativeFlavor;
		}
		icecreamState = !icecreamState;
	});
	// let divs = document.getElementsByClassName('icecream');
	// console.log('10.3: Icecream divs: ' + divs);
	// for( let i=0; i<ii; i++ ) {
	// 	if (divs[i].innerHTML == 'tomato') {
	// 		divs[i].innerHTML = 'pistage';
	// 	} else {
	// 		divs[i].innerHTML = 'tomato';
	// 	}
	// }
}









//
