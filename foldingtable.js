function toggle() {
  if(typeof toggle.flag == 'undefined'){
    toggle.flag = true;
  }
  var day = date.getDate();
    day = day < 10 ? "0" + day : day; // force 2 digits
    var month = date.getMonth() + 1;
    month = month < 10 ? "0" + month : month; // force 2 digits
    var year = date.getFullYear();
    var fullDate = year + "-" + month + "-" + day;
    var rows = document.getElementById("test1").getElementsByTagName("tr");
    var count = rows.length;
    if(toggle.flag){
      for(var i=1;i<count;i++){
        if(rows.item(i).id<fullDate){
          rows.item(i).style.display = 'none';
        } 
      }
      document.getElementById("hide-button").innerHTML = "Show Table";
      toggle.flag = false;       
    }else{
      for(var j=1;j<count;j++){
        rows.item(j).style.display = '';
      }   
      document.getElementById("hide-button").innerHTML = "Hide Table";
      toggle.flag = true;
    }
  }