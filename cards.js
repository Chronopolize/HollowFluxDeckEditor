


$( document ).ready(function() {
	console.log("hi")
  addCards();
});

function addCards(){
 
 let dest = $('#cards').first();
 //150 cards in total
 for (i=1;i<=60;i++){
 	let img = $(`<img class="card-image" src="./img/cards/${i}.jpg"></img>`)
 	dest.append(img);
 }
 
}