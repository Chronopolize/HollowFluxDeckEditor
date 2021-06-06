


var tags = new Map();
tags.set("aggro", [1, 2, 3, 4]);
tags.set("defence", [5, 6, 7]);


function setupTagPanelButtons(){
	$('.addNewTag').click(()=>{
		addTagButton()
	});
	// $('input[type=radio][name=selected_tag]').change(function() {
	// 	console.log("radio changed");
	// 	updateCardElementsTaggedStatus();
	// });
}

function regenerateTagButtons(){
	const dest = $('.tagValues').first();
	dest.text('');


	let tagNames = Array.from( tags.keys() );
	tagNames.unshift("None");

	for(const name of tagNames){
		let tagButton = $(`<input type="radio" name="selected_tag" value="${name}">`);
		dest.append(tagButton);	
		dest.append(name);
		tagButton.change(function() {
			console.log("radio changed");
			updateCardElementsTaggedStatus();
		});
	}

	$('input:radio[name=selected_tag]:nth(0)').attr('checked',true); //select "None"
}


function addTagButton(){
	const newTagName =  $('.newTagName').first().val();
	addTag(newTagName)
	regenerateTagButtons();
}

/**
	@param tagName: undefined and empty string are not allowed. Also "None" is a special placeholder and not allowed
*/
function addTag(tagName){
	if(!tags.has(tagName) && tagName && tagName != "None"){
		tags.set(tagName, []);
		regenerateTagButtons();
	}
}

/* 
	Does nothing if tagName is undefined
*/
function toggleCardTag(tagName, cardId){
	if(!tagName){
		console.log("Invalid tagName:", tagName);
		return;
	}
	if(tags.has(tagName)){
		const cardsWithTag = tags.get(tagName);
		cardsWithTag.includes(cardId) ? removeElement(cardsWithTag, cardId) : cardsWithTag.push(cardId);
	}
	updateCardElementsTaggedStatus()
}

function updateCardElementsTaggedStatus(){

	let selectedTag = getSelectedTag();
	console.log(selectedTag)
	if(selectedTag && selectedTag !== "None"){
		for(element of cardElements){
			let cardId = parseInt(element.attr("cardid"));
			setElementTagStatus(element, cardHasTag(cardId, selectedTag))
		}
	}else{
		for(element of cardElements){
			clearElementTagStatus(element);
		}
	}
}
function setElementTagStatus(element, value){
	if(value){
		element.addClass("hasSelectedTag")
		element.removeClass("missingSelectedTag")
	}else{
		element.addClass("missingSelectedTag")
		element.removeClass("hasSelectedTag")
	}
}
function clearElementTagStatus(element){
	element.removeClass("hasSelectedTag")
	element.removeClass("missingSelectedTag")
}


function cardHasTag(cardId, tag){
	return tags.has(tag) && tags.get(tag).includes(cardId);
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