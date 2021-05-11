

$("#getDeckFile").change((event)=>{
	let file = event.target.files[0];
	fileToString(file, (result)=>{
		console.log(result);
	});
});


function fileToString(file, callback=()=>{}){
  const reader = new FileReader();
  let result="";
  reader.addEventListener('load', (event) => {
   	result = event.target.result;
   	callback(result);
  });
  reader.readAsText(file);
}