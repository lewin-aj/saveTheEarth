//* FUNCTION: ADJUST TEXT AREA SIZE WHEN USED 
function adjust_textarea(h) {
	
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
	document.getElementById('field1').value = "";
	document.getElementById('field2').value = "";
	document.getElementById('field3').value = "";
	
	if(document.getElementById('form_stat_load')) {
		document.getElementById('form_stat_load').style.display = "none";
	}
	return false;
}
//* FUNCTION: SHOW LIMITED NEWS and ALSO ALL NEWS
function handleNewsList(showAll) {
	
	var parent = document.getElementById("news_stream");
	var maximumShowAtStart = 15;
	var children = parent.childNodes.length;
	if(showAll) maximumShowAtStart = children;
	for(var i=0; i < children; i++){
		if(parent.childNodes[i].tagName == "DIV") {
			if(maximumShowAtStart > 0) {
				parent.childNodes[i].style.display = "block";
				maximumShowAtStart--;
			} else {
				parent.childNodes[i].style.display = "none";
			}
		}
	}
	if(showAll)
		document.getElementById("showMore").style.display = "none"; 		// hide button when visitor has seen all news stories
}

