


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