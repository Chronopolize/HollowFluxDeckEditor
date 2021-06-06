


var tags = new Map();
tags.set("aggro", [1, 2, 3, 4]);
tags.set("defence", [5, 6, 7]);

function regenerateTagButtons(){
	const dest = $('.tagValues').first();
	dest.text('');

	for(const [tagName, cardIds] of tags){
		let tagButton = `<input type="radio" name="selected_tag" value="${tagName}">${tagName}`;
		dest.append(tagButton);	
	}
}


function setupTagPanelButtons(){
	$('.addNewTag').click(()=>{
		addTagButton()
	});
}

function addTagButton(){
	const newTagName =  $('.newTagName').first().val();
	addTag(newTagName)
	regenerateTagButtons();
}

/**
	@param tagName: undefined and empty string are not allowed
*/
function addTag(tagName){
	if(!tags.has(tagName) && tagName){
		tags.set(tagName, []);
		regenerateTagButtons();
	}
}

/* 
	Does nothing if tagName is undefined
*/
function toggleCardTag(tagName, cardId){
	console.log("Toggling card-tag:", tagName, cardId)
	if(!tagName){
		console.log("Invalid tagName:", tagName);
		return;
	}
	if(tags.has(tagName)){
		const cardsWithTag = tags.get(tagName);
		cardsWithTag.includes(cardId) ? removeElement(cardsWithTag, cardId) : cardsWithTag.push(cardId);
	}
	console.log(tags);
}

/**
	Returns the name of the selected tag, or undefined if nothing is selected.
*/
function getSelectedTag(){
	return $('input[name="selected_tag"]:checked').val();
}

function removeElement(array, elem) {
    var index = array.indexOf(elem);
    if (index > -1) {
        array.splice(index, 1);
    }
}