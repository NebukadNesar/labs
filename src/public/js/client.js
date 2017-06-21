$(document).ready(function() {

  var availableServerData = false;
  var serverList = [];

  function closeall (){
    $("#labm_about").hide();
    $("#labm_home").hide();
    $("#labm_sitemap").hide();
    $(".lili").removeClass("active");
  }

  function readFileContent(){
    try {
      var content = $.parseJSON($("#content").val().trim());
      console.log(content);
      $.ajax({
        type: 'POST',
        data: JSON.stringify(content),
        contentType: 'application/json',
        url: 'http://localhost:3000/api/upload',
        success: function(data) {
          console.log('success');
          console.log(JSON.stringify(data));
        },
        failure: (result) =>{
          console.log(result);
        }
      });
    } catch (e) {
      $("#error-messagge").html("Content json formatında değil..")
    } finally {

    }
  }

  function populateTable(args, refreshh){
    if(availableServerData==true && refreshh==false){
      return;
    }
    var data = args.serverList;
    var table = document.getElementsByClassName("rwd-table")[0];
    availableServerData = true;
    serverList = data;

    // Create an empty <tr> element and add it to the 1st position of the table:
    for (var i = 0; i < data.length; i++) {
      var rowIndex = 0;
      if(table.rows){
        rowIndex = table.rows.length;
      }
      var row = table.insertRow(rowIndex);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);
      var cell6 = row.insertCell(6);
      var cell7 = row.insertCell(7);
      var cell8 = row.insertCell(8);

      // Add some text to the new cells:
      cell0.innerHTML = data[i].serverName || "-";
      cell1.innerHTML = data[i].serverLocation || "-";
      cell2.innerHTML = data[i].serverIp || "-";
      cell3.innerHTML = data[i].serialNumber || "-";
      cell4.innerHTML = data[i].relatedGroup || "-";
      cell5.innerHTML = data[i].relatedProject || "-";
      cell6.innerHTML = data[i].serverEndDate || "-";
      cell7.innerHTML = data[i].serverAdmin || "-";
      cell8.innerHTML = data[i].serverPasswd || "-";
    }

  }

  /**find server with ip **/
  function findServer(ip){
    var servers;
    if(serverList.length !== 0){
      servers = serverList;
    }
    else{
      getAllServers();
    }
    for (var i = 0; i < servers.length; i++){
      if(servers[i].serverIp === ip){
        return servers[i];
      }
    }
    return null;
  }

  function getAllServers(args){
    if(availableServerData==true && args !== "refreshh"){
      return;
    }
    $.ajax({
      type: 'GET',
      contentType: 'application/json',
      url: 'http://localhost:3000/api/getAllServers',
      success: function(data) {
        populateTable(data, true);
      },
      failure: (result) =>{
        console.log("Failed: ", result);
      }
    });
  }

  function refreshhServers(){
    var elmtTable = document.getElementsByClassName("rwd-table")[0];
    var rowCount = elmtTable.rows.length;
    while(--rowCount) elmtTable.deleteRow(rowCount);
    getAllServers("refreshh");
  }

  $('#upload').click(function() {
    $.get('http://localhost/api/upload', function(result) {

    });
  });
  $('#li_home').click(function() {
    closeall();
    $("#li_home").addClass("active");
    $("#labm_home").show()
  });

  $('#li_about').click(function() {
    closeall();
    getAllServers("about");
    $("#li_about").addClass("active");
    $("#labm_about").show()
  });

  $('#li_refreshh').click(function() {
    refreshhServers();
  });


  $('#li_sitemap').click(function() {
    closeall();
    $("#li_sitemap").addClass("active");
    $("#labm_sitemap").show()
  });
  $('#uploadfile').click(function() {
    readFileContent();
  });

});
