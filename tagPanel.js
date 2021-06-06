


var tags = new Map();
// tags.set("aggro", [1, 2, 3, 4]);
// tags.set("defence", [5, 6, 7]);


function setupTagPanelButtons(){
	$('.addNewTag').click(()=>{
		addTagButton()
	});
	setupTagSaveLoadButtons()
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
			updateCardElementsTaggedStatus();
			applySearchFilters();
		});
	}

	$(".filterCardsBySelectedTag").change(function(){
		applySearchFilters();
	});

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
/**
	Puts a tag and all its contents. Use this over direct putting.
*/
function putTag(tagName, cardIds){
	if(tagName && tagName != "None"){
		tags.set(tagName, cardIds);
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
	applySearchFilters();
}

function updateCardElementsTaggedStatus(){

	let selectedTag = getSelectedTag();
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

/**
 	hoveredCardId: expects an int
*/
function updateHighlightedCardTagsText(hoveredCardId){
	
	const dest = $(".highlightedCardTags")
	const cardId = hoveredCardId;
	const name = cardRepo[cardId].name;

	const tagsFound = getTags(cardId);

	let str;
	str = `${name}<br>`
	str += `Tags: (${getTags(cardId).join(", ")})`	
	dest.html(str);
}

function getTags(cardId){
	const found = [];
	for(let [tagName, cards] of tags){
		if(cards.includes(cardId)){
			found.push(tagName);
		}
	}
	return found;
}

/**
	cardId: expects an int
*/
function cardHasTag(cardId, tagName){
	if(tagName == "None"){
		return true;
	}
	return tags.has(tagName) && tags.get(tagName).includes(cardId);
}

function tagMatches(card) {
	let checkbox = $(`.filterCardsBySelectedTag`)
	if(checkbox.prop("checked")){
		return cardHasTag(card.id, getSelectedTag())
	}else{
		return true;
	}
}

///// Save tags to Disk

function exportTagsAsJson(){
	let str = JSON.stringify(mapToObj(tags))
	console.log("Exported tags: ", str);
	return str;
}


function setupTagSaveLoadButtons(){
	$("#tagsSave").click(()=>{{
		console.log("tags saved clicked");
	    downloadToFile(exportTagsAsJson(), 'tags.tags', 'text/plain');
	}});
}

function mapToObj(inputMap) {
    let obj = {};
    inputMap.forEach(function(value, key){
        obj[key] = value
    });
    return obj;
}

///// Load tags from file


$("#getTagsFile").change((event)=>{
	let file = event.target.files[0];
	fileToString(file, (result)=>{
		parseAndLoadJSONTags(result);
	});
});


function parseAndLoadJSONTags(string){
	console.log("parsed tags", string);
	const obj = JSON.parse(string);

	tags.clear();

	for(tagName in obj){
		putTag(tagName, obj[tagName]);
	}

}