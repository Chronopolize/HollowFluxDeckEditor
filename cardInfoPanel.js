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
		header.html(`<span class="cardTitle">${escapeHtml(getCardTitle(id, language))}</span> {Cost: ${card.cost}} id: ${id}
			${card.type} [${power}] ー ${getCardAttributes(id, language).join("、")}`
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

function escapeHtml(unsafe) {
    return unsafe
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
 }