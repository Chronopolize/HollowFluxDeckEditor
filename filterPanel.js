const costFilterValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardTypes = ["Character", "Command", "Set"];
const typeSpecialOptions = ["Other", "Unknown"];
const attributeTypes = ["人間", "発現者", "魔術", "理霊", "亜人", "始原識", "特異存在", "特異能力", "神格",　"奥義", "電子精神", "装備"];
const attributeSpecialOptions = ["Other", "None", "Unknown"];



function setupSearchForm() {
	$(".nameSearch").change(function() {
		applySearchFilters();
	})
	$(".descriptionSearch").change(function() {
		applySearchFilters();
	})



	//Type filter

	let typeCheckboxNames = [...cardTypes];
	typeCheckboxNames.push(...typeSpecialOptions);

	for (value of typeCheckboxNames) {
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

	const checkbox = $(`<input type="checkbox" class="costFilterCheckbox costFilterTenOrMore">`)
	$(".costFilterValues").append("10+").append(checkbox).append(" ");

	$(".costFilterTenOrMore").click(function() {
		applySearchFilters();
	})
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
	let firstMatchId;

	for (let id = 1; id <= repoCardCount; id++) {
		const card = cardRepo[id];
		let matches = true;
		
		matches &= nameMatches(card);

		matches &= descriptionMatches(card);

		matches &= typeMatches(card);

		matches &= attributeMatches(card);

		matches &= costMatches(card);

		matches &= tagMatches(card);

		if (matches) {
			getCardElement(id).show();
			matchCount += 1;
			if(!firstMatchId)
				firstMatchId = id;				
		} else {
			getCardElement(id).hide();
		}
	}
	$(".matchCount").text(matchCount + " cards found")
	if(matchCount>0){
		showCardImageAndInfo(firstMatchId);
	}
}


function nameMatches(card){
	const nameString = $(".nameSearch").val()
	if(!nameString)
		return true;
	return card.name.includes(nameString)  || containsCI(card.eng_name, nameString);
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
	for (value of cardTypes) {
		checkbox = $(`.typeFilterCheckbox[value="${value}"]`)
		if (checkbox) {
			if (checkbox.prop("checked") && equalsCI(card.type, value)) {
				matches = true;
			}
		}
	}

	checkbox = $(`.typeFilterCheckbox[value="Other"]`);
	if (checkbox.prop("checked")) {
		if (!equalsCI(card.type, "Unknown")) {
			if (!cardTypes.some(a => equalsCI(a, card.type))) {
			return true;
			}
		}
	}

	checkbox = $(`.typeFilterCheckbox[value="Unknown"]`);
	if (checkbox.prop("checked")) {
		if (equalsCI(card.type, "Unknown")) {
			return true;
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
		let checkbox = $(`.costFilterCheckbox[value="${value}"]`)
		if (checkbox) {
			if (!checkbox.prop("checked") && card.cost == value) {
				matches = false;
			}
		}
	}

	let checkbox = $(`.costFilterTenOrMore`)
	if (checkbox) {
		if (!checkbox.prop("checked") && card.cost >=10) {
			matches = false;
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
function containsCI(a, b){
	a = a.toLowerCase();
	b = b.toLowerCase();
	return a.includes(b);
}
