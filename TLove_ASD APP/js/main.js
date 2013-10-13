// Tai Love
// ASD 1310

$(document).ready(function(){
	
	
// Home Page	
$("#home").on('pageinit', function(){
	
});  // Home Page End

// Form Page
$("#addEntItem").on('pageinit', function(){
	
	// Store Local Data
	var storeData = function(data, key){
		
		if(!key){
            var id    =    Math.floor(Math.random()*100000001);
        }else{
           
            id = key;
        }    
		var detail              = {};
			detail.saveTo      	= ["Save Info To : ", $('#saveTo').val()];
			detail.date        	= ["Date : ", $('#date').val()];
			detail.catalog     	= ["In My Collection : ", $('catalog').val()];
			detail.titleName  	= ["Entertainment Title : ", $('#titleName').val()];
			detail.Favorite    	= ["Is This a Favorite? : ",$("input:radio[name=Favorite]:checked").val()];
			detail.coi         	= ["Cost of Item : ", $('#coi').val()]; 
			detail.theCondition = ["Is This Item Brand New? : ", $('#theCondition').val()]; 
			detail.textArea     = ["Notes : ", $('#textArea').val()];
		
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
		
		
		// Auto Populate Local Storage
		var autoPopulateData = function (){
	        //Actual JSON OBJECT data req.for this to work is coming from json.js
	          //Store the JO into Local Storage
	        for(var n in jsonData){
	            var id = Math.floor(Math.random()*100000001);
	            localStorage.setItem(id, JSON.stringify(jsonData[n]));
	        }  
	        alert("There is no data in Local Storage, so default data was added.");  
	     };
		
			
		// Load JSON Data
		//$('loadJSON').on('click', function(){
			$.ajax({
				url: 'js/data.json',
				type: 'GET',
				dataType: 'json',
				success: function(data, status){
					console.log(status, data);
				},
				error: function(error, parseerror){
					console.log(error, parseerror);
				}
			});
	//	});
	
	
		// Load XML Data
		$('loadXML').on('click', function(){
			$.ajax({
				url: 'js/data.xml',
				type: 'GET',
				dataType: 'xml',
				success: function(data){
					console.log(data);
				},
				error: function(error, parseerror){
					console.log	(error, parseerror);
				}
			});
		});
	
		
		// Clear Local Storage
    	var clearLocalStorage = function (){
	        if(localStorage.length===0){
	            alert("There is no data to clear.");
	        }else{
	      		localStorage.clear();
			    alert("All entertainment data will be cleared!");
			    window.location.reload();
			    return false;
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
	
		
		// Error Link / Form Validation
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
		
  
	
}); // Form Page End 

		



// Browse Page
$("#browse").on('pageinit', function(){
	
}); // Browse Page End 




}); // Document Ready End 



/*Form values / submit button
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
*/	
	