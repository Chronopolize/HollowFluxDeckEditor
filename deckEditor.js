$(document).ready(function() {
	loadAndProcessCardData();

	addCardElements();

	setupSearchForm()
	setupTagPanelButtons()
	setupDeckSaveLoadButtons();

	regenerateTagButtons()
	applySearchFilters()
 	
	regenerateDeckPanel()
	// ouputSetXML() // for developer use
	// outputCockatriceImgNames() // for developer use
});

const cardElements = []; // for other components to easily access

const repoCardCount = 150;
function addCardElements() {

	cardElements.length = 0;

	let sortedCards = [...cardRepo];
	sortedCards.splice(0, 1);

	sortedCards.sort((a, b)=> {

		if(a.cost!=b.cost){
			return a.cost-b.cost;
		}else if(a.type.localeCompare(b.type)!=0){
			return a.type.localeCompare(b.type)
		}else{
			return a.id-b.id;
		}
	});



	let dest = $('.cardListingPanel').first();
	for (card of sortedCards) {
		const id = card.id;

		let img = $(`<img class="card-image" cardid="${id}" src="./img/cards/${id}.jpg"></img>`)
		cardElements.push(img);

		img.hover(onHover, null);
		dest.append(img);

		img.click((event) => {
			if(event.ctrlKey){
				toggleCardTag(getSelectedTag(), id)
			}else if(event.shiftKey){
				deck.incrementCardGuard(id)
				regenerateDeckPanel();
			}else{
				deck.incrementCardMain(id)
				regenerateDeckPanel();
			}
		})
		img.bind('contextmenu', function(e) {
			event.shiftKey ? deck.decrementCardGuard(id) :  deck.decrementCardMain(id);
            regenerateDeckPanel();
            return false;
		}); 

		function onHover() {
			let id = parseInt($(this).attr("cardid"));
			showCardImageAndInfo(id);
			updateHighlightedCardTagsText(id);
		}
	}



}

function getCardElement(cardid) {
	if (Number.isInteger(cardid) && cardid >= 0) {
		let element = $(`img[cardid='${cardid}'`).first();
		return element;
	} else {
		console(`${cardid} is not a valid card id`)
		return null;
	}
}






