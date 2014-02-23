function getNearestDate(date) {
    
    if(typeof getNearestDate.counter == 'undefined') {
        getNearestDate.counter = 0;
    }
    getNearestDate.counter++;
    
    if (getNearestDate.counter > 7) {
         return false;   
    }

	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var fullDate = day + "-" + month + "-" + year;
	var fragment = document.getElementById(fullDate);

	if (typeof(fragment) == 'undefined' || fragment == null)
	{
 	    var nextDate = new Date(date.getTime() + (24 * 60 * 60 * 1000));
    	return getNearestDate(nextDate);
	} else {
		return fullDate;
	}
}

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