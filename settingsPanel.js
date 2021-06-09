
const ENGLISH = 1;
const JAPANESE = 2;

const DEFAULT_LANGUAGE = JAPANESE; // change this to "ENGLISH" if desired

let language = DEFAULT_LANGUAGE; // Language only applies to card names. Internally, decks are always stored with Japanese titles.

display_language = DEFAULT_LANGUAGE;


$("input[type='radio'][name='display_language']").click(function() {
    let value = $(this).val();
    changeLanguage(value);
});


function changeLanguage(value){
	value = parseInt(value);
	if(language == value) return;
	language = value;

	console.log("language changed", language);
	showCardImageAndInfo(lastId)
	updateHighlightedCardTagsText(lastId);
	regenerateDeckPanel()
}
