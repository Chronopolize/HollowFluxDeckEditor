$(document).ready(function() {
	preProcessCardRepo()
	labelDescriptionKeywords()

	addCards();
	setupSearchForm()
	applySearchFilters()
 	
	deck.incrementCardMain(1);
	deck.incrementCardMain(150);
	deck.incrementCardMain(150);
	regenerateDeckPanel()
});

const repoCardCount = 150;
function addCards() {

	let dest = $('.cardListingPanel').first();
	for (i = 1; i <= repoCardCount; i++) {
		const id = i;

		let img = $(`<img class="card-image" cardid="${i}" src="./img/cards/${i}.jpg"></img>`)

		img.hover(onHover, null);
		dest.append(img);

		img.click((event) => {
			event.shiftKey ? deck.incrementCardGuard(id) : deck.incrementCardMain(id);
			regenerateDeckPanel();
			
		})
		img.bind('contextmenu', function(e) {
			event.shiftKey ? deck.decrementCardGuard(id) :  deck.decrementCardMain(id);
            regenerateDeckPanel();
            return false;
		}); 

		function onHover() {

			let id = $(this).attr("cardid");

			showCardImageAndInfo(id);
		}
	}



}

function showCardImage(id){
	let panel = $('.selectedCard')
	panel.attr("src", `./img/cards/${id}.jpg`);
	panel.css("visibility", "visible");
}

function showCardImageAndInfo(id) {

	showCardImage(id);

	const header = $('.cardHeader');
	const desc = $('.cardDesc');

	const card = cardRepo[id];
	const power = (card.type === "Set Card" ? "+" : "") + card.power;

	if (card) {
		header.html(`<span class="cardTitle">${card.name}</span> {Cost: ${card.cost}} id: ${id}
			${card.type} [${power}] ー ${card.attributes.join("、")}`
		)
		desc.html(card.descWithMarkup)
	} else {
		clearCardInfo();
	}

}

function clearCardInfo() {
	const header = $('.cardHeader');
	const desc = $('.cardDesc');
	header.text('')
	desc.text('')
}

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
			card.type = "";
		}
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
				card.type = "Unknown"
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

function getCardElement(cardid) {
	if (Number.isInteger(cardid) && cardid >= 0) {
		let element = $(`img[cardid='${cardid}'`).first();
		return element;
	} else {
		console(`${cardid} is not a valid card id`)
	}
}



const costFilterValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const typeFilterValues = ["Character", "Command", "Set", "Unknown"];
const attributeTypes = ["人間", "発現者", "魔術", "論霊", "始原織", "特異存在", "特異能力", "装備"];
const attributeSpecialOptions = ["Other", "None", "Unknown"];


function setupSearchForm() {
	$(".nameSearch").change(function() {
		applySearchFilters();
	})
	$(".descriptionSearch").change(function() {
		applySearchFilters();
	})



	//Type filter
	for (value of typeFilterValues) {
		const checkbox = $(`<input type="checkbox" class="typeFilterCheckbox" value="${value}">`)
		$(".typeFilterValues").append(value).append(checkbox).append(" ");
		checkbox.change(function() {
			applySearchFilters();
		});
	}
	$(".typeFilterCheckbox").prop('checked', true);

	// Attribute filter
	let attributeCheckboxNames = [...attributeTypes];
	attributeCheckboxNames.push(...attributeSpecialOptions);

	for (value of attributeCheckboxNames) {
		const checkbox = $(`<input type="checkbox" class="attributeFilterCheckBox" value="${value}">`)
		$(".attributeFilterValues").append(value).append(checkbox).append(" ");
		$(".attributeFilterCheckbox").prop('checked', false);
		checkbox.change(function() {
			applySearchFilters();
		});
	}


	// Cost filters
	for (value of costFilterValues) {
		const checkbox = $(`<input type="checkbox" class="costFilterCheckbox" value="${value}">`)
		$(".costFilterValues").append(value).append(checkbox).append(" ");
		checkbox.change(function() {
			applySearchFilters();
		});
	}

	$(".costFilterSelectAll").click(function() {
		costFilterSelectAll();
		applySearchFilters();
	})
	$(".costFilterDeselectAll").click(function() {
		costFilterDeselectAll();
		applySearchFilters();
	})
	costFilterSelectAll();


}

function costFilterSelectAll() {
	$(".costFilterCheckbox").prop('checked', true);
}
function costFilterDeselectAll() {
	$(".costFilterCheckbox").prop('checked', false);
}
// Search methods

function applySearchFilters() {

	let matchCount = 0;

	for (let id = 1; id <= repoCardCount; id++) {
		const card = cardRepo[id];
		let matches = true;
		

		matches &= nameMatches(card);

		matches &= descriptionMatches(card);

		matches &= typeMatches(card);

		matches &= attributeMatches(card);

		matches &= costMatches(card);

		if (matches) {
			getCardElement(id).show();
			matchCount += 1;
		} else {
			getCardElement(id).hide();
		}
		$(".matchCount").text(matchCount + " cards found")
	}
}


function nameMatches(card){
	const nameString = $(".nameSearch").val()
	if(!nameString)
		return true;
	return card.name.includes(nameString)
}

function descriptionMatches(card) {
	const descString = $(".descriptionSearch").val();
	const searchTokens = descString.toLowerCase().split(" ");

	if (!descString)
		return true;
	if (!card.desc) {
		return false;
	}
	for (token of searchTokens) {
		if (!card.desc.toLowerCase().includes(token)) {
			return false;
		}
	}
	return true;

}

function typeMatches(card) {
	let matches = false;
	for (value of typeFilterValues) {
		checkbox = $(`.typeFilterCheckbox[value="${value}"]`)
		if (checkbox) {
			if (checkbox.prop("checked") && equalsCI(card.type, value)) {
				matches = true;
			}
		}
	}
	return matches;
}

function attributeMatches(card) {
	// Handle regular attributes. Cards must match all the selected attributes.
	for (value of attributeTypes) {
		checkbox = $(`.attributeFilterCheckbox[value="${value}"]`)
		if (checkbox) {
			if (checkbox.prop("checked") && !card.attributes.includes(value)) {
				return false;
			}
		}
	}
	// Handle special options for attributes

	checkbox = $(`.attributeFilterCheckbox[value="Other"]`);
	if (checkbox.prop("checked")) {
		if (card.attributes.length == 0 || card.attributes.includes("Unknown")) {
			return false;
		} else if (card.attributes.some(a => attributeTypes.includes(a))) {
			return false;
		}
	}

	checkbox = $(`.attributeFilterCheckbox[value="None"]`);
	if (checkbox.prop("checked")) {
		if (card.attributes.length !=0){
			return false;
		}
	}

	checkbox = $(`.attributeFilterCheckbox[value="Unknown"]`);
	if (checkbox.prop("checked")) {
		if (!card.attributes.includes("Unknown")) {
			return false;
		}
	}

	return true;
}
function costMatches(card) {
	let matches = true;
	for (value of costFilterValues) {
		checkbox = $(`.costFilterCheckbox[value="${value}"]`)
		if (checkbox) {
			if (!checkbox.prop("checked") && card.cost == value) {
				matches = false;
			}
		}
	}
	return matches;
}


function equalsCI(a, b) {
	if (typeof a === 'string' && typeof b === 'string') {
		return a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0
	} else {
		console.log("ciEquals: Expected type string string, got:", typeof a, typeof b);
	}
}


/* ---------------------- DECK PANEL ----------------------*/


const MAX_CARD_MULTIPLE = 3;

class Deck {
	main = [];   //map of id to number
	guard = [];

	sizeMain(){
		return cards.length;
	}
	sizeGuard(){
		return guard.length;
	}

	incrementCardMain(id){
		let card = this.main.find(c =>  {
			return c.id === id
		})
		if(this.pCopiesInDeck(id)>=3) return;
		if(card){
			card.copies += 1;
		}else{
			this.main.push(new CardMultiple(id));
		}
	}
	incrementCardGuard(id){
		let card = this.guard.find(c =>  {
			return c.id === id
		})
		if(this.pCopiesInDeck(id)>=3) return;
		if(card){
			card.copies += 1;
		}else{
			this.guard.push(new CardMultiple(id));
		}
	}
	decrementCardMain(id){
		let card = this.main.find(c =>  {
			return c.id === id
		})
		if(card){
			card.copies -=1;
			if(card.copies<=0){
				this.main = this.main.filter(c => c !== card);
			}
		}
	}
	decrementCardGuard(id){
		let card = this.guard.find(c =>  {
			return c.id === id
		})
		if(card){
			card.copies -=1;
			if(card.copies<=0){
				this.guard = this.guard.filter(c => c !== card);
			}
		}
	}

	//p for private methods :/
	pAddCard(id){
		cards.push(new CardMultiple(id))
	}
	// returns copies of a card in main + guard
	pCopiesInDeck(id){
		let copies = 0;
		let card = this.main.find(c =>  {
			return c.id === id
		})
		if(card){
			copies += card.copies;
		}
		card = this.guard.find(c =>  {
			return c.id === id
		})
		if(card){
			copies += card.copies;
		}
		return copies;
	}
}
let deck = new Deck();

class CardMultiple{
	constructor(id){
		this.id = id;
		this.copies = 1;
	}
	copies;
	id;
}

function regenerateDeckPanel(){
	let dest = $(".deckCardsPanel");
	dest.html('');

	dest.append("<div class='deckTextHeader'>Main deck:</div>")

	for(cardMultiple of deck.main){
		let card = cardRepo[cardMultiple.id];
		let entry = $(`<div id="deckPanelCardEntry">${card.name} x${cardMultiple.copies}</div>`)
		dest.append(entry);


		const id = cardMultiple.id;
		entry.click((event) => {
			deck.incrementCardMain(id);
			regenerateDeckPanel();
		})

		entry.bind('contextmenu', function(e) {
            deck.decrementCardMain(id);
            regenerateDeckPanel();
            return false;
		}); 
		entry.hover(()=>{showCardImageAndInfo(id)})
	}

	dest.append("<div class='deckTextHeader'>Guard deck:</div>")

	for(cardMultiple of deck.guard){
		let card = cardRepo[cardMultiple.id];
		let entry = $(`<div id="deckPanelCardEntry">${card.name} x${cardMultiple.copies}</div>`)
		dest.append(entry);


		const id = cardMultiple.id;
		entry.click((event) => {
			deck.incrementCardGuard(id);
			regenerateDeckPanel();
		})
		entry.bind('contextmenu', function(e) {
            deck.decrementCardGuard(id);
            regenerateDeckPanel();
            return false;
		}); 
		entry.hover(()=>{showCardImageAndInfo(id)})
	}
	
}
