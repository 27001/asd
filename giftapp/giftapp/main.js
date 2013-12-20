$(document).ready(function(){
	console.log("let's go");
	
	$.ajax({
           "url": "_view/details",
           "dataType": "json",
           "success": function(data) {
              $.each(data.rows, function(index, info){
              	var recipient = info.value.recipient;
		    	var occasion  = info.value.occasion;
		    	var gift      = info.value.gift;
		    	var cost 	  =	info.value.cost;
		    	var notes     = info.value.notes;
		    	$('#infoList').append(
		    		$('<li>').append(
		    			$('<a>').attr("href", "#")
		    				.text(recipient)
		    		)
		    	);
             });
             $('#infoList').listview('refresh');
          }
      }); 
});



$(document).on('pageinit', '#home', function(){
   // CouchDB Code
});