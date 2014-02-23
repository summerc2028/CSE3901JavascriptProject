function getNearestDate(date) {
    
    if(typeof getNearestDate.counter == 'undefined') {
        getNearestDate.counter = 0;
    }
    getNearestDate.counter++;
    
    if (getNearestDate.counter > 7) {
         return false;   
    }
    document.write(getNearestDate.counter + "\t");
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	var fullDate = "#" + day + "-" + month + "-" + year;
	document.writeln(fullDate + "<br>");
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
document.write("Enter if statement")
if (nearestDate) {
	document.write("nearestDateFound")
	link.setAttribute("href", nearestDate);
} else {
	document.write("nearestDateNotFound")
	link.addEventListener("click", noDate);
}
document.write("DONE")