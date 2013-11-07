// Tai Love // ASD 1311

    
// Home Page
$("#home").on('pageinit', function(){
    
}); // Home Page End



// Gift Form Page
$("#addGift").on('pageinit', function(){
    
    $('submit').on('click', function(){
        validateData();
    });
    
    $('reset').on('click', function(){
        location.reload();
    });
      
    $('clearData').on('click', function(){
        localStorage.clear();
    });
        
        
    // Validation
        
    function validateData(key){
        var theGift = $('#giftForm');
        theGift.validate({
            invalidHandler: function(form, validator){},
            submitHandler: function(){
                var data = theGift.serializeArray();
                writeData(data,key);
            }
        });
    };
        
        
      
    // Save to local storage   
    var storeData = function(data, key){
        var id;
          
        if(!key){
            var id = Math.floor(Math.random()*100000001);
        }else{
            id = key;
        }
            
    var detail             = {};
        detail.forWho      = ["Recipient : ", $('#forWho').val()];
        detail.occasion    = ["Occasion : ", $('#occasion').val()];
        detail.gift        = ["Gift : ", $('#gift').val()];
        detail.selectDay   = ["Date : ", $('#selectDay').val()];
        detail.store       = ["Store : ", $('#store').val()]
        detail.coi         = ["Cost of Item : ", $('#coi').val()]; 
        detail.textArea    = ["Notes : ", $('#textArea').val()]; 
               
        //Save date to loal storage with Stringify to convert object to strings
        localStorage.setItem(id, JSON.stringify(detail));
        alert("Info Saved!");
        resetForm();
        }; // End save to local storage        
        
        
    //Get Local Data
    var getTheData = function (){
        if (localStorage.length === 0){
            alert("There is no data in Local Storage, so default data was added.");
            autoPopulateData();
        }  
    };
    
    // Auto Populate Local Storage
	var autoPopulateData = function (){
        //Actual JSON OBJECT data req.for this to work is coming from data.Json
          //Store the JO into Local Storage
        for(var n in jsonData){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(jsonData[n]));
        }    
     };
    
}); // Gift Form Page End

  
  
// Interests and Ideas Page
$("#addInfo").on('pageinit', function(){
    
    $('submit').on('click', function(){
        validateData();
    });
    
    $('clear').on('click', function(){
        location.reload();
    });
    
}); // Interests and Ideas Page End
  
  
  
  
// Browse Page
$("#browse").on('pageinit', function(){
    
}); // Browse Page End




