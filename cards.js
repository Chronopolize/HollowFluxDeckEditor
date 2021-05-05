$( document ).ready(function() {
  postProcessCardRepo()
  addCards();
  setupSearchForm()
});

const repoCardCount = 150;
function addCards(){
 
 let dest = $('.cardListingPanel').first();
 for (i=1;i<=repoCardCount;i++){
 	let img = $(`<img class="card-image" cardid="${i}" src="./img/cards/${i}.jpg"></img>`)

img.hover(onHover, null);
 	dest.append(img);

function onHover(){
	
	let id = $(this).attr("cardid");
	// console.log("hovered cardid", cardid)
	let panel = $('.selectedCard')
	panel.attr("src", `./img/cards/${id}.jpg`);
	panel.css("visibility", "visible");

	showCardInfo(id);
}
function offHover(){
	$('.selectedCard').css("visibility", "hidden");
	clearCardInfo()
}
 }



 
}

 function showCardInfo(id){
 	const header = $('.cardHeader');
 	const desc = $('.cardDesc');

 	const card = cardRepo[id];
 	const power = (card.type === "Set Card" ? "+" : "") + card.power;
 	if(card){
 		header.html(`<span class="cardTitle">${card.name}</span> {Cost: ${card.cost}} id: ${id}
 			${card.type} [${power}] ー ${card.attributes}`
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

function postProcessCardRepo(){

	//Init undefined cards
	for(let id=1;id<=repoCardCount;id++){
		if(!cardRepo[id]){
			cardRepo[id] = {
			   id: id,
			   type: "Unknown",
			   cost: 0,
			   name: "Unknown Card",
			   attributes: "",
			   desc: "",
			   power: "0"
			 };
		}
	}
	for(card of cardRepo){
		if(card.cost === null){
			card.cost = 0;
		}
	}

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

function getCardElement(cardid){
	if(Number.isInteger(cardid) && cardid >=0){
		let element = $(`img[cardid='${cardid}'`).first();
		return element;
	}else{
		console(`${cardid} is not a valid card id`)
	}
}



const costFilterValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function setupSearchForm(){
	$(".nameSearch").change(function(){
		applySearchFilters();
	})
	$(".descriptionSearch").change(function(){
		applySearchFilters();
	})
	
	for(value of costFilterValues){
		const checkbox = $(`<input type="checkbox" class="costFilterCheckbox" value="${value}">`)
		$(".costFilterValues").append(value).append(checkbox).append(" ");
		checkbox.change(function(){
			applySearchFilters();
		});
	}

	$(".costFilterSelectAll").click(function(){
		costFilterSelectAll();
		applySearchFilters();
	})
	$(".costFilterSelectNone").click(function(){
		costFilterSelectNone();
		applySearchFilters();
	})
	costFilterSelectAll();

	
}

function costFilterSelectAll(){
	$(".costFilterCheckbox").prop('checked', true);
}
function costFilterSelectNone(){
	$(".costFilterCheckbox").prop('checked', false);
}
// Search methods

function applySearchFilters(){
	

	const nameString = $(".nameSearch").val()
	// This is the only english text search
	const descString = $(".descriptionSearch").val();
	const searchTokens = descString.toLowerCase().split(" ");
	console.log(descString, ":", searchTokens);
	
	for(let id = 1; id<=repoCardCount;id++){
		const card = cardRepo[id];
		let matches = true;


		
		if(nameString){
			if(!card.name.includes(nameString)){
				matches = false;
			}		
		}
		
		if(descString){
			if(!card.desc){
				matches = false
			}else{
				for(token of searchTokens){
					if(!card.desc.toLowerCase().includes(token)){
						matches = false;
					}		
				
				}	
			}
			
		}

		for (value of costFilterValues){
			checkbox = $(`.costFilterCheckbox[value="${value}"]`)
			if(checkbox){
				if(!checkbox.prop("checked") && card.cost == value){
					matches = false;
				}
			}
		}



		if(matches){
			getCardElement(id).show();
		}else{
			getCardElement(id).hide();
		}
	}
}