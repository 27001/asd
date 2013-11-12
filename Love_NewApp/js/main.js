// Tai Love // ASD 1311

    
// Home Page
$("#home").on('pageinit', function(){
    
}); // Home Page End



// Gift Form Page
$("#addGift").on('pageinit', function(){
    
    // Validation
        var theGift = $('#giftForm');
            theGift.validate({
                invalidHandler: function(form, validator){
                },
                submitHandler: function(){
        var data = theGift.serializeArray();
                    storeData(data);
                }
            });
        
    
        
 /*   function validateData(key){
        var theGift = $('#giftForm');
        theGift.validate({
            invalidHandler: function(form, validator){},
            submitHandler: function(){
                var data = theGift.serializeArray();
                storeData(data);
            }
        });
    }; */
    
    
    $('submit').on('click', function(){
        validateData();
    });
    
    $('reset').on('click', function(){
        location.reload();
    });
      
    $('clearData').on('click', function(){
        localStorage.clear();
    });
        
        
    
        
        
      
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
        detail.purchased   = ["Date Purchased: ", $('#purchased').val()];
        detail.store       = ["Store Purchased : ", $('#store').val()]
        detail.coi         = ["Cost of Item : ", $('#coi').val()]; 
        detail.textArea    = ["Notes : ", $('#textArea').val()]; 
               
        //Save date to loal storage with Stringify to convert object to strings
        localStorage.setItem(id, JSON.stringify(detail));
        alert("Info Saved!");
        resetForm();
        }; // End save to local storage        
        
        
 /*   //Get Local Data
    var getTheData = function (){
        if (localStorage.length === 0){
            alert("There is no data in Local Storage, so default data was added.");
            autoPopulateData();
        }
        for(var i=0, ls=localStorage.length; i<ls; i++){
            var key = localStorage.key(i);
            var keyVal = localStorage.getItem(key);
            var jsnObj = JSON.parse(keyVal);
            for(var n in jsnObj){
                var newObj = jsnObj[n][0]+" "+jsnObj[n][1];
                $ ('#giftList').append(newObj + "<br />");
            }
        $('#giftList').append('key + " " + "<br />');
        
        
        }
    };
   
    // Auto Populate Local Storage
	var autoPopulateData = function (){
        //Actual JSON OBJECT data req.for this to work is coming from data.Json
          //Store the JO into Local Storage
        for(var n in items){
            var id = Math.floor(Math.random()*100000001);
            localStorage.setItem(id, JSON.stringify(items[n]));
        }    
     };
 */     
   
    $('jsonStorage').on('click', function(){
        var items = [];
        $.ajax({
            url      : "data.json",
            type     : "GET",
            dataType : "json",
            success  : function(data, status) {
                console.log(status, data);
            },
            error: function(error, parseerror) {
                console.log(error, parseerror)
            }
        })    
    });  // End Load JSON Data 
    // Load JSON Data
    /*$('#jsonStorage').on('click', function(){
        $.ajax({
            url      : "xhr/data.json",
            type     : "GET",
            dataType : "json",
            success  : function(data, status) {
                console.log(status, data);
            },
            error: function(error, parseerror) {
                console.log(error, parseerror)
            }
        })    
    });  // End Load JSON Data
   */     
    
    // Load XML Data
    $('#xmlStorage').on('click', function(){
        $.ajax({
            url      : "data.xml",
            type     : "GET",
            dataType : "xml",
            success  : function(data, status) {
                console.log(status, data);
            },
            error: function(error, parseerror) {
                console.log(error, parseerror)
            }
        });
    }); // End Load XML Data
     
    
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




