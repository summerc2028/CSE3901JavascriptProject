// Find the nearest date fo class
function getNearestDate(date) {
    
    // Set static variable to 
    if(typeof getNearestDate.counter == 'undefined') {
        getNearestDate.counter = 0;
    }
    getNearestDate.counter++;
    
    if (getNearestDate.counter > 7) {
         return false;   
    }

    // Get formatted date string
	var day = date.getDate();
	day = day < 10 ? "0" + day : day; // force 2 digits
	var month = date.getMonth() + 1;
	month = month < 10 ? "0" + month : month; // force 2 digits
	var year = date.getFullYear();
	var fullDate = day + "-" + month + "-" + year;
	document.writeln(fullDate);
	var fragment = document.getElementById(fullDate);

	// Search for an id matching the date
	if (typeof(fragment) == 'undefined' || fragment == null)
	{
 	    var nextDate = new Date(date.getTime() + (24 * 60 * 60 * 1000)); // increment date
    	return getNearestDate(nextDate);
	} else {
		return fullDate;
	}
}

// Event handler if no date is found
function noDate() {
	alert("There is no class scheduled within the next 7 days!");
}

// Get nearsest date and the hyperlink element
var date = new Date();
var nearestDate = getNearestDate(date);
var link = document.getElementById("search-by-date");

// Set the onClick function of the link appropriately
if (nearestDate) {
	link.setAttribute("href", "#" + nearestDate);
} else {
	link.addEventListener("click", noDate);
}