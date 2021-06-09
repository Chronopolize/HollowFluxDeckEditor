


function escapeXML(str){
	return str.replace(/&/g, '&amp;')
               .replace(/</g, '&lt;')
               .replace(/>/g, '&gt;')
}
function escapeNameChars(str){
	return str.replaceAll(/[「」]/g, "”")
}


function outputSetXML(){
	let cardsXML = "";

for (let id = 1; id <= repoCardCount; id++){
	let card = cardRepo[id];

	// change title characters which Cockatrice can't handle
	// Use main-type slot to display english name since I dunno how to make Cockatrice display custom properties.
	let cardXML = `<card>
			<name>${escapeNameChars(card.name)}</name>
			<text>${escapeXML(card.desc)}</text>
			<prop>
				<type>${card.type} ― ${card.attributes.join(", ")}</type>
				<maintype>${card.eng_name}</maintype>
				<manacost>${card.cost}</manacost>
				<pt>${card.power}</pt>
			</prop>
			<set>HFLX</set>
		</card>`
	cardsXML+=cardXML;
}


let setXML = `<?xml version="1.0" encoding="UTF-8"?>
<cockatrice_carddatabase version="4">
	<sets>
		<set>
			<name>HFLX</name>
			<longname>Hollow Flux, by Hollow_Perception</longname>
			<settype>Custom</settype>
			<releasedate>2019-11-01</releasedate>
		</set>
	</sets>
	<cards>`
	+ cardsXML +
	`</cards>
</cockatrice_carddatabase>`;

console.log(setXML)
}

function cardMultipleToCockatriceFormat(cardMul){
	let card = cardRepo[cardMul.id]
	return `
	<card number="${cardMul.copies}" name="${escapeNameChars(card.name)}"/>`;
}

function exportDeckAsCockatriceFormat(){
	let mainDeckXML="";
	let guardDeckXML = "";

	for(card of deck.main){
		mainDeckXML += cardMultipleToCockatriceFormat(card)
	}
	for(card of deck.guard){
		guardDeckXML += cardMultipleToCockatriceFormat(card)
	}


	return `<?xml version="1.0" encoding="UTF-8"?>
<cockatrice_deck version="1">
    <deckname></deckname>
    <comments></comments>
    <zone name="main">${mainDeckXML}
    </zone>
    <zone name="side">${guardDeckXML}
    </zone>
</cockatrice_deck>`
}


function setupDeckSaveLoadButtons(){
	$("#deckSave").click(()=>{{
	    downloadToFile(exportDeckAsCockatriceFormat(), 'deck.cod', 'text/plain');
	}});
}

const downloadToFile = (content, filename, contentType) => {
  const a = document.createElement('a');
  const file = new Blob([content], {type: contentType});
  
  a.href= URL.createObjectURL(file);
  a.download = filename;
  a.click();

	URL.revokeObjectURL(a.href);
};

function outputCockatriceImgNames(){
	let names = "";
	for (let id = 1; id <= repoCardCount; id++){
		let card = cardRepo[id];
		names += escapeNameChars(card.name) + "\n";
	}
	console.log(names);
}


  