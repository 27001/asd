$(document.ready(function() {
	console.log('Testing!');
	$.ajax({
		"url": "_view/collection",
		"dataType": "json",
		"success": function(data) {
			console.log(data)
			$.each(data.rows, function(index, collection){
				console.log(value);
				var location = collection.value.location;
		 		var	selectDay = collection.value.selectDay;
		 		var	catalog = collection.value.catalog;
		 		var	titleName = collection.value.titleName;
		 		var	condition = collection.value.condition;
		 		var	favorite = collection.value.favorite;
		 		var	coi = collection.value.coi;
		 		var	comments = collection.value.comments;
		 		$('#collectionlist').append()
		 			$('<li>').append(
		 				$('<a>').attr("href", "#')
		 					.text(titleName)
		 			)		
		 		);
			});
			$('#collection').listview('refresh');
		}
	})
});