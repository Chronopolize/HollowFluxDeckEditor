$( document ).ready(function() {
	console.log("hi")
  addCards();
});

function addCards(){
 
 let dest = $('.cardListingPanel').first();
 //150 cards in total
 for (i=1;i<=20;i++){
 	let img = $(`<img class="card-image" cardid="${i}" src="./img/cards/${i}.jpg"></img>`)

let onHover = function (){
	
	let cardid = $(this).attr("cardid");
	console.log("hovered cardid", cardid)


	let panel = $('.selectedCard')
	panel.attr("src", `./img/cards/${cardid}.jpg`);
	panel.show();
	
}
let offHover = function(){
	$('.selectedCard').hide();
}
 	
 	img.hover(onHover, offHover);
 	dest.append(img);
 }
 
}