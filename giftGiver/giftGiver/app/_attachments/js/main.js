// Tai Love // ASD 1311
$(document).on(function() {
	console.log('ready');
	 $.ajax({
           "url": "-view/details",
           "dataType": "json",
           "success": function (data) {
              $.each(data.rows, function(index, info){
              	var recipient = info.value.recipient;
              	var birthday  = info.value.birthday;
		    	var occasion  = info.value.occasion;
		    	var gift      = info.value.gift;
		    	var cost 	  =	info.value.cost;
		    	var favs      = info.value.favs;
		    	var interests = info.value.interests;
		    	var notes     = info.value.notes;
		    	$('#infoList').append(
		    		$('<li>').append(
		    			$('<a>').attr("href", "#")
		    				.text(notes)
		    		)
		    	);
             });
             $('#infoList').listview('refresh');
          }
      }); 
}); // End of Document 



