$(document).ready(function() {
	loadAndProcessCardData();

	addCardElements();
	setupSearchForm()
	applySearchFilters()
 	
	deck.incrementCardMain(1);
	deck.incrementCardMain(150);
	deck.incrementCardMain(150);
	regenerateDeckPanel()
	// ouputSetXML() // for developer use
});

const repoCardCount = 150;
function addCardElements() {

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






