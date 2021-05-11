



function ouputSetXML(){
	let cardsXML = "";

for (let id = 1; id <= repoCardCount; id++){
	let card = cardRepo[id];

	let cardXML = `<card>
			<name>${card.name}</name>
			<text>${card.desc}</text>
			<prop>
				<type>${card.type} ― ${card.attributes.join(", ")}</type>
				<maintype>${card.type}</maintype>
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