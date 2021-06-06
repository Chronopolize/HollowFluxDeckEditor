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


const repoCardCount = 150;
function addCardElements() {

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
			let id = $(this).attr("cardid");
			showCardImageAndInfo(id);
		}
	}



}






