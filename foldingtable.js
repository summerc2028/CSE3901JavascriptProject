//Hides/Shows the table rows before the next occuring class period
function toggle() {

  //Set static variable
  if(typeof toggle.flag == 'undefined'){
    toggle.flag = true;
  }
    //Obtain system date
    var day = date.getDate();
    day = day < 10 ? "0" + day : day; // force day to 2 digits
    var month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month; // force month to 2 digits
    var year = date.getFullYear();
    var fullDate = year + "-" + month + "-" + day; 
    //Obtain all row elements within the class schedule table
    var rows = document.getElementById("classTable").getElementsByTagName("tr");
    var count = rows.length;
    //The first click of the hide button hides dates prior to the next class period
    if(toggle.flag){
      for(var i=1;i<count;i++){
        if(rows.item(i).id<fullDate){   //search rows for dates and compare to current date
          rows.item(i).style.display = 'none'; //Sets dates less than current date to not display
        } 
      }
      document.getElementById("hide-button").innerHTML = "Show Table"; //Change the button text
      toggle.flag = false;       
    }else{
      for(var j=1;j<count;j++){ //Traverse all rows and make all of them visible
        rows.item(j).style.display = '';
      }   
      document.getElementById("hide-button").innerHTML = "Hide Table"; //Change the button text
      toggle.flag = true;
    }
  }
  document.getElementById("hide-button").addEventListener("click", toggle, false); 