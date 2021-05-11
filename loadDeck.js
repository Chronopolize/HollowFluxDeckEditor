

$("#getDeckFile").change((event)=>{
	let file = event.target.files[0];
	fileToString(file, (result)=>{
		parseStringAsXML(result);
	});
});


function fileToString(file, callback=()=>{}){
  const reader = new FileReader();
  let result="";
  reader.addEventListener('load', (event) => {
   	result = event.target.result;
   	callback(result);
  });
  reader.readAsText(file);
}

let main;
function parseStringAsXML(string){
	let xmlDoc = $.parseXML(string);
	let $xml = $(xmlDoc);
	console.log($xml);
	main = $xml.find("zone[name='main']").first();
	guard = $xml.find("zone[name='side']").first();

	let mainCards = main.find("card");
	let guardCards = guard.find("card");

	deck.clear();


	let name;
	let failedCards = [];

	mainCards.each(function(){
		name = $(this).attr("name");
		let copies = parseInt($(this).attr("number"));
		console.log(name, copies);

		let card = getCardFromCockatriceName(name);
		if(!card){
			console.log("Unknown card name: ", name);
			failedCards.push(name);
			return;
		}
		console.log("Found card", name)
		for(let i=0;i<copies;i++){
			deck.incrementCardMain(card.id)
		}
	});

	guardCards.each(function(){
		name = $(this).attr("name");
		let copies = parseInt($(this).attr("number"));
		console.log(name, copies);

		let card = getCardFromCockatriceName(name);
		if(!card){
			console.log("Unknown card name: ", name);
			failedCards.push(name);
			return;
		}
		console.log("Found card", name)
		for(let i=0;i<copies;i++){
			deck.incrementCardGuard(card.id)
		}
	});
	if(failedCards.length){
		alert(`${failedCards.length} card entries could not be read. ${failedCards}\nPerhaps the spelling has changed? `)
	}


	regenerateDeckPanel();
	// main.children().each(function() {
	// 	console.log(this);
	// 	console.log(this.attr("name"));
	// })		
}

function getCardFromCockatriceName(cardName){
	const match = cardRepo.find((card)=>{
		if(!card.name) return false;
		// console.log(`'${escapeNameChars(card.name)}'`, `'${cardName}'`);
		return escapeNameChars(card.name) === cardName
	});
	if(match){
		return match;
	}else{
		return null;
	}
}
