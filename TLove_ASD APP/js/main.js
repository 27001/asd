// Tai Love
// ASD 1310

$(document).ready(function(){
	
	
// Home Page	
$("#home").on('pageinit', function(){
	
});

// Form Page
$("#addEntItem").on('pageinit', function(){
	
	
	var myEntForm = $('#entForm');
		entErrorLink = $('#entErrorLink');
		
 	myEntForm.validate({
 		invalidHandler: function(form, validator){
 			entErrorLink.click();
 			var htmlString = '';
 			for(var key in validator.submitted){
 				var label  = $('label[for^="'+ key +'"]').not('[generated]');
 				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
 				var theFieldName = legend.length ? legend.text() : label.text();
 				htmlString += '<li>'+ theFieldName +'</li>';
 			};
 			$("#addItem2Errors ul" ).html(htmlString);
 		},
 		submitHandler: function(){
		  var data = myEntForm.serializeArray();
		  	storeData(data);
	 	}
	});
 	

	// Store Local Data
	var storeData = function(data, key){
		
		if(!key){
            var id    =    Math.floor(Math.random()*100000001);
        }else{
           
            id = key;
        }    
		
		localStorage.setItem('saveTo', $('#saveTo'.val());
		localStorage.setItem('theDate', $('#date'.val());
		localStorage.setItem('catalog', $('#catalog'.val());
		localStorage.setItem('titleName', $('#titleName'.val());
		//localStorage.setItem('radios', $('#saveTo'.val());
		localStorage.setItem('slider', $('#coi'.val());
		localStorage.setItem('theCondition', $('#theCondition'.val());
		localStorage.setItem('textArea', $('#textArea'.val());
		
		 //Save date to loal storage with Stringify to convert object to strings
           localStorage.setItem(id, JSON.stringify(detail));
           alert("Info Saved!");
	};
	
	
	// Get Local Data
	var getTheData = function(){ 
		if (localStorage.length === 0){
           alert("There is no data in Local Storage, so default data was added.");
           autoPopulateData();
        }   
		
	};
	
	
	
	// Form values / submit button
	$('#submit').on('click', function(){
		var saveTo 	     = $('#saveTo').val();
		var theDate      = $('#date').val();
		var catalog      = $('#catalog').val();
		var titleName    = $('#titleName').val();
		var radios       = $("form input:radio:checked").val();
		var slider       = $('#coi').slider();
		var theCondition = $('#theCondition').val();
		var textArea     = $('#textArea').val();
	});
	
	
	
});



// Browse Page
$("#browse").on('pageinit', function(){
	
});


	
	


	
// Auto Populate Local Storage
	var autoPopulateData = function (){
        //Actual JSON OBJECT data req.for this to work is coming from json.js
          //Store the JO into Local Storage
        for(var n in jsonData){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(jsonData[n]));
        }    
     };
	
	
	
	
// Delete Item
 	var deleteTheItem = function (){
        var askQ = confirm("Are you sure you want to delete entry?");
        if(askQ){
          localStorage.removeItem(this.key);
           window.location.reload();
           alert("Info was deleted!");
         }else{
           alert("Info was NOT deleted!");
         }
     };

// Clear Local Storage
    var clearLocalStorage = function (){
        if(localStorage.length===0){
            alert("There is no data to clear.");
        }else{
            localStorage.clear();
            alert("All user and workout data will be cleared!");
            window.location.reload();
            return false;
        }
     };

});
