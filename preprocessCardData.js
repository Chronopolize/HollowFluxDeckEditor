function preProcessCardRepo() {
	//Init undefined cards
	for (let id = 1; id <= repoCardCount; id++) {
		if (!cardRepo[id]) {
			cardRepo[id] = {
				id: id,
				type: "Unknown",
				cost: 0,
				name: "Unknown Card",
				attributes: null,
				desc: "",
				power: "0"
			};
		}
	}
	for (card of cardRepo) {
		if (card.cost === null) {
			card.cost = 0;
		}

		if (!card.type) {
			card.type = "Unknown";
		}else{
			switch (card.type.toUpperCase()) {
			case "C":
				card.type = "Character"
				break;
			case "CMD":
				card.type = "Command"
				break;
			case "S":
				card.type = "Set"
				break;
			default:
				// leave as is
			}
		}
		
		if(card.desc === null || typeof card.desc == undefined){
			card.desc = "";
		}
		if (card.attributes === null || typeof card.attributes == "undefined") {
			card.attributes = ["Unknown"];
		} else if (card.attributes === "") {
			card.attributes = [];
		} else {
			card.attributes = card.attributes.split(/[\s,・]+/)
		}
	}

	labelDescriptionKeywords()
}

const keywords = ["Vigilance", "Piercing", "Sunder", "Hypersonic", "Retaliate", "Deathless"];

function labelDescriptionKeywords(){
	for(let id = 1; id <= repoCardCount; id++){
		let card = cardRepo[id];
		card.descWithMarkup = card.desc;
		for(keyword of keywords){
			card.descWithMarkup = card.descWithMarkup.replaceAll(keyword,`<span class="descriptionKeyword">${keyword}</span>`)
			card.descWithMarkup = card.descWithMarkup.replaceAll(keyword.toLowerCase(),`<span class="descriptionKeyword">${keyword.toLowerCase()}</span>`)
		}
	}
}
