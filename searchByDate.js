var link = document.getElementById("search-by-date");

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var fullDate = day + "-" + month + "-" year;

link.setAttribute('href', fullDate);