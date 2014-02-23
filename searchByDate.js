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

	var day = date.getDate();
	day = day < 10 ? "0" + day : day; // force 2 digits
	var month = date.getMonth() + 1;
	month = month < 10 ? "0" + month : month; // force 2 digits
	var year = date.getFullYear();
	var fullDate = day + "-" + month + "-" + year;
	document.writeln(fullDate);
	var fragment = document.getElementById(fullDate);

	if (typeof(fragment) == 'undefined' || fragment == null)
	{
 	    var nextDate = new Date(date.getTime() + (24 * 60 * 60 * 1000));
    	return getNearestDate(nextDate);
	} else {
		return fullDate;
	}
}

// Event handler if no date is found
function noDate() {
	alert("There is no class scheduled within the next 7 days!");
}

var date = new Date();
var nearestDate = getNearestDate(date);
var link = document.getElementById("search-by-date");

if (nearestDate) {
	link.setAttribute("href", "#" + nearestDate);
} else {
	link.addEventListener("click", noDate);
}