//your JS code here. If required.
let button=document.getElementById("enterBtn");
let value=document.getElementById("status");

button.addEventListener("click", function(){
	let h1=document.createElement("h1");
	h1.textContent="Entered Metaverse";
	value.replaceWith(h1);
	
})