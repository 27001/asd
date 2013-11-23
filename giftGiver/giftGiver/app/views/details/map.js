function(doc) {
  if (doc._id.substr(0, 5) === "info:") {
    emit(doc._id.substr(5), {
    	"recipient": doc.recipient,
    	"birthday": doc.birthday,
    	"occasion": doc.occasion,
    	"gift": doc.gift,
    	"cost": doc.cost,
    	"favs": doc.favs,
    	"interests": doc.interests,
    	"notes": doc.notes
    });
  }
};




