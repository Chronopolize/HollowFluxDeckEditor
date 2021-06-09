function showCardImage(id){
	let panel = $('.selectedCard')
	panel.attr("src", `./img/cards/${id}.jpg`);
	panel.css("visibility", "visible");
}

let lastId;
/**
	id expects an int
*/
function showCardImageAndInfo(id) {

	lastId = id;

	showCardImage(id);

	const header = $('.cardHeader');
	const desc = $('.cardDesc');

	const card = cardRepo[id];
	const power = (card.type === "Set Card" ? "+" : "") + card.power;

	if (card) {
		header.html(`<span class="cardTitle">${getCardTitle(id, language)}</span> {Cost: ${card.cost}} id: ${id}
			${card.type} [${power}] ー ${card.attributes.join("、")}`
		)
		desc.html(card.descWithMarkup)
	} else {
		clearCardInfo();
	}

}

function clearCardInfo() {
	$('.cardHeader').text('');
	$('.cardDesc').text('');
}