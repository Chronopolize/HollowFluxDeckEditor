/* ---------------------- DECK PANEL ----------------------*/


const MAX_CARD_MULTIPLE = 3;
const MAIN_DECK_MAX_SIZE = 30;
const GUARD_DECK_MAX_SIZE = 10;

class Deck {
	main = []; 
	guard = [];

	sizeMain(){
		return this.main.reduce((total, card)=>{return total+card.copies}, 0);
	}
	sizeGuard(){
		return this.guard.reduce((total, card)=>{return total+card.copies}, 0);
	}

	clear(){
		this.main.length = 0;
		this.guard.length = 0;
	}

	incrementCardMain(id){
		let card = this.main.find(c =>  {
			return c.id === id
		})
		if(this.pCopiesInDeck(id)>=3){
			console.log(`Could not add card ${id} to main deck due to multiples limit`)	
			return;
		} 
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
		if(this.pCopiesInDeck(id)>=3) {
			console.log(`Could not add card ${id} due to guard deck due to multiples limit`)
			return;
		}
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

	dest.append(`<div class='deckTextHeader'>Main deck (${deck.sizeMain()}/${MAIN_DECK_MAX_SIZE})</div>`)

	for(cardMultiple of deck.main){
		let card = cardRepo[cardMultiple.id];
		let entry = $(`<div class="deckPanelCardEntry">${card.name} x${cardMultiple.copies}</div>`)
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

	dest.append(`<div class='deckTextHeader'>Guard deck (${deck.sizeGuard()}/${GUARD_DECK_MAX_SIZE})</div>`)

	for(cardMultiple of deck.guard){
		let card = cardRepo[cardMultiple.id];
		let entry = $(`<div class="deckPanelCardEntry">${card.name} x${cardMultiple.copies}</div>`)
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
