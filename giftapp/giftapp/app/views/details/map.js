function(doc) {
  if (doc.type === "Gifts") {
    emit(doc._id.substr(5), {
    	"recipient": doc.recipient,
    	"occasion": doc.occasion,
    	"gift": doc.gift,
    	"cost": doc.cost,
    	"notes": doc.notes
    });
  }
};