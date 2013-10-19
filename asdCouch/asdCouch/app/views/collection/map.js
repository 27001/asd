function(doc) {
	if (doc._id.substr(0, 8) === "entry"){
 		emit(doc._id.substr(8), {
 			"location": doc.location,
 			"selectDay": doc.selectDay,
 			"catalog": doc.catalog,
 			"titleName": doc.titleName,
 			"condition": doc.condition,
 			"favorite": doc.favorite,
 			"coi": doc.coi,
 			"comments": doc.comments
 		});
 	}
};