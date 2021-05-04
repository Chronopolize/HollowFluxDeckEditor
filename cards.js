$( document ).ready(function() {
  processCardRepo()
  addCards();
});

function addCards(){
 
 let dest = $('.cardListingPanel').first();
 const cardCount = 150;
 for (i=1;i<=cardCount;i++){
 	let img = $(`<img class="card-image" cardid="${i}" src="./img/cards/${i}.jpg"></img>`)

let onHover = function (){
	
	let id = $(this).attr("cardid");
	// console.log("hovered cardid", cardid)


	let panel = $('.selectedCard')
	panel.attr("src", `./img/cards/${id}.jpg`);
	panel.css("visibility", "visible");

	showCardInfo(id);
}
let offHover = function(){
	$('.selectedCard').css("visibility", "hidden");
	clearCardInfo()
}
 	img.hover(onHover, offHover);
 	dest.append(img);
 }


 function showCardInfo(id){
 	const header = $('.cardHeader');
 	const desc = $('.cardDesc');

 	const card = cardRepo[id];
 	const power = (card.type === "Set Card" ? "+" : "") + card.power;
 	if(card){
 		header.html(`<span class="cardTitle">${card.name}</span> {Cost: ${card.cost}}\n${card.type} [${power}] ー ${card.attributes}`
 			)
 		desc.text(card.desc)
 	}else{
 		clearCardInfo();
 	}

 }

 function clearCardInfo(){
 	const header = $('.cardHeader');
 	const desc = $('.cardDesc');
 	header.text('')
 	desc.text('')
 }
 
}


function processCardRepo(){
	for(card of cardRepo){
		switch(card.type){
			case "C":
				card.type="Character"
			break;
			case "Cmd":
				card.type="Command"
			break;
			case "S":
				card.type="Set Card"
			break;
			default:
		}
	}
}

